package com.codeworm47.chatboard.configs;

import com.codeworm47.chatboard.constants.AppConstants;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.text.SimpleDateFormat;

@Configuration
public class ObjectMapperConfig {
    @Bean
    public ObjectMapper objectMapper(){
        ObjectMapper mapper = new ObjectMapper();
        mapper.enable(DeserializationFeature.ACCEPT_EMPTY_STRING_AS_NULL_OBJECT);
        mapper.disable(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES);
        SimpleDateFormat df = new SimpleDateFormat(AppConstants.ISO_FORMAT);
        mapper.setDateFormat(df);
        return mapper;
    }
}
