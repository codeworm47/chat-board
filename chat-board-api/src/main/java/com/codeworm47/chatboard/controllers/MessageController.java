package com.codeworm47.chatboard.controllers;

import com.codeworm47.chatboard.models.entities.Message;
import com.codeworm47.chatboard.services.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/messages")
public class MessageController {

    @Autowired
    MessageRepository messageRepository;

    @GetMapping
    public Iterable<Message> get(){
//        List<MessageViewModel> res = new ArrayList<>();
//        ObjectMapper mapper = new ObjectMapper();
//        messageRepository.findAll().forEach(m-> {
//            res.add(mapper.convertValue(m, MessageViewModel.class));
//        });
//        return res;
        var a = messageRepository.findAll();
        return a;
    }

    @GetMapping(value = "/{id}")
    public Message get(@PathVariable Long id){
//        List<MessageViewModel> res = new ArrayList<>();
//        ObjectMapper mapper = new ObjectMapper();
//        messageRepository.findAll().forEach(m-> {
//            res.add(mapper.convertValue(m, MessageViewModel.class));
//        });
//        return res;
        return messageRepository.findById(id).get();
    }

    @PostMapping
    public Message create(@RequestBody Message message){
        return messageRepository.save(message);
    }

}
