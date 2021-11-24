package com.codeworm47.chatboard.models.dto;

import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.Serializable;

public class MessageInputModel implements Serializable {
    private static final long serialVersionUID = -1080291503046639575L;

    String userName;
    String text;

    public MessageInputModel() {
    }

    public MessageInputModel(String userName, String text) {
        this.userName = userName;
        this.text = text;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }
//    @Override
//    public String toString(){
//        return String.format("{\"userName\": \"%s\", \"text\" : \"%s\"}", userName, text);
//    }
}
