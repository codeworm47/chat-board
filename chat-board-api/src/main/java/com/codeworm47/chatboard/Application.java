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
        ConfigurableApplicationContext context = SpringApplication.run(Application.class, args);

        WebSocket.init(context);
    }
}
