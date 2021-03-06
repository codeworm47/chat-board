package com.codeworm47.chatboard.models.dto;

import java.io.Serializable;
import java.util.Date;

public class MessageViewModel implements Serializable {
    private static final long serialVersionUID = -877485449933377211L;

    private int id;
    private String userName;
    private String text;
    private Date date;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}
