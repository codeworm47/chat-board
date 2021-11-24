package com.codeworm47.chatboard.services;

import com.codeworm47.chatboard.constants.EnvironmentConstants;
import com.codeworm47.chatboard.models.dto.MessageInputModel;
import com.codeworm47.chatboard.models.dto.MessageViewModel;
import com.codeworm47.chatboard.models.entities.Message;
import com.codeworm47.chatboard.services.repository.MessageRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class MessageService {
    @Value(EnvironmentConstants.DEFAULT_PAGE_SIZE)
    private Integer defaultPageSize;

    private ObjectMapper mapper;
    private MessageRepository messageRepository;

    public MessageViewModel save(MessageInputModel messageInputModel){
        Message message = mapper.convertValue(messageInputModel, Message.class);
        Message result = messageRepository.save(message);
        return mapper.convertValue(result, MessageViewModel.class);
    }

    public List<MessageViewModel> get(){
        return get(0, defaultPageSize);
    }

    public List<MessageViewModel> get(Integer page){
        return get(page, defaultPageSize);
    }

    private List<MessageViewModel> get(Integer page, Integer size){
        Pageable pageable = PageRequest.of(page, size);
        return messageRepository.findAll(pageable).map(m-> mapper.convertValue(m, MessageViewModel.class))
                .get()
                .collect(Collectors.toList());
    }

    @Autowired
    public void setMessageRepository(MessageRepository messageRepository) {
        this.messageRepository = messageRepository;
    }

    @Autowired
    public void setMapper(ObjectMapper mapper) {
        this.mapper = mapper;
    }
}
