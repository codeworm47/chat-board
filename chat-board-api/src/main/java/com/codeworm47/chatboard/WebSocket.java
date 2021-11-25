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
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.core.env.ConfigurableEnvironment;

import java.util.Objects;

public class WebSocket {
    static final Logger LOGGER = LogManager.getLogger(WebSocket.class);
    static void init(ConfigurableApplicationContext context) {
        ConfigurableEnvironment env = context.getEnvironment();
        ObjectMapper mapper = context.getBean(ObjectMapper.class);
        MessageService messageService = context.getBean(MessageService.class);

        Configuration config = new Configuration();
        config.setHostname(env.getProperty(EnvironmentConstants.WEB_SOCKET_HOSTNAME_KEY));
        config.setPort(Integer.parseInt(Objects.requireNonNull(env.getProperty(EnvironmentConstants.WEB_SOCKET_PORT_KEY))));

        final SocketIOServer server = new SocketIOServer(config);
        server.addConnectListener(client -> LOGGER.info("A new client has connected -> {}", client.getSessionId()));
        server.addDisconnectListener(client -> LOGGER.info("Client has disconnected -> {}", client.getSessionId()));

        server.addEventListener("chat", MessageInputModel.class, (client, data, ackRequest) -> {
            LOGGER.info("message received : {}", mapper.writeValueAsString(data));
            MessageViewModel result = messageService.save(data);
            LOGGER.info("message processing finished successfully, result : {}", mapper.writeValueAsString(result));
            server.getBroadcastOperations().sendEvent("chat", result);
        });
        server.start();
    }
}
