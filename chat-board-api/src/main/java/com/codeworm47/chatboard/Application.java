package com.codeworm47.chatboard;

import com.codeworm47.chatboard.models.dto.MessageInputModel;
import com.corundumstudio.socketio.Configuration;
import com.corundumstudio.socketio.SocketIOClient;
import com.corundumstudio.socketio.SocketIOServer;
import com.corundumstudio.socketio.listener.ConnectListener;
import com.corundumstudio.socketio.listener.DisconnectListener;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Application {

    public static void main(String[] args) {
        Logger logger = LogManager.getLogger(Application.class);

        Configuration config = new Configuration();
        config.setHostname("0.0.0.0");
        config.setPort(9091);

        final SocketIOServer server = new SocketIOServer(config);
        server.addConnectListener(client -> logger.info("A new client has connected -> {}", client.getSessionId()));

        server.addDisconnectListener(client -> logger.info("Client has disconnected -> {}", client.getSessionId()));
        server.addEventListener("chat", MessageInputModel.class, (client, data, ackRequest) -> {
            logger.info("message received : {}", data);
            server.getBroadcastOperations().sendEvent("chat", data);
        });
        server.start();

        SpringApplication.run(Application.class, args);
    }

}
