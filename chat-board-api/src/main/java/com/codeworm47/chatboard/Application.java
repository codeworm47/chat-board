package com.codeworm47.chatboard;

import com.codeworm47.chatboard.constants.EnvironmentConstants;
import com.codeworm47.chatboard.models.dto.MessageInputModel;
import com.codeworm47.chatboard.models.dto.MessageViewModel;
import com.codeworm47.chatboard.services.MessageService;
import com.corundumstudio.socketio.Configuration;
import com.corundumstudio.socketio.SocketIOServer;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.core.env.ConfigurableEnvironment;

import java.util.Objects;

@SpringBootApplication
public class Application {

    public static void main(String[] args) {
        Logger logger = LogManager.getLogger(Application.class);
        ConfigurableApplicationContext context = SpringApplication.run(Application.class, args);
        ConfigurableEnvironment env = context.getEnvironment();
        //ObjectMapper mapper = context.getBean(ObjectMapper.class);
        MessageService messageService = context.getBean(MessageService.class);

        Configuration config = new Configuration();
        config.setHostname(env.getProperty(EnvironmentConstants.WEB_SOCKET_HOSTNAME_KEY));
        config.setPort(Integer.parseInt(Objects.requireNonNull(env.getProperty(EnvironmentConstants.WEB_SOCKET_PORT_KEY))));

        final SocketIOServer server = new SocketIOServer(config);
        server.addConnectListener(client -> logger.info("A new client has connected -> {}", client.getSessionId()));
        server.addDisconnectListener(client -> logger.info("Client has disconnected -> {}", client.getSessionId()));

        server.addEventListener("chat", MessageInputModel.class, (client, data, ackRequest) -> {
            logger.info("message received : {}", data);
            MessageViewModel result = messageService.save(data);
            server.getBroadcastOperations().sendEvent("chat", result);
        });
        server.start();
    }
}
