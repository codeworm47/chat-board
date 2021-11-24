package com.codeworm47.chatboard.models.dto;

import com.fasterxml.jackson.databind.ObjectMapper;

public class MessageInputModel {
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
    //@Override
    //public String toString(){
//        return new ObjectMapper().convertValue(this, MessageInputModel.class);
//    }
}
