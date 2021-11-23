package com.codeworm47.chatboard.services.repository;

import com.codeworm47.chatboard.models.entities.Message;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface MessageRepository extends PagingAndSortingRepository<Message, Long> {
}