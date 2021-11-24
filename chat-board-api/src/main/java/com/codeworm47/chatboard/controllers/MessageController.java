package com.codeworm47.chatboard.controllers;

import com.codeworm47.chatboard.models.dto.MessageViewModel;
import com.codeworm47.chatboard.services.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/messages")
public class MessageController {
    MessageService messageService;

    @GetMapping
    public List<MessageViewModel> get(@RequestParam(required = false) int page) {
        if (page > 0){
            return messageService.get(page);
        }
        return messageService.get();
    }

    @Autowired
    public void setMessageService(MessageService messageService) {
        this.messageService = messageService;
    }
}
