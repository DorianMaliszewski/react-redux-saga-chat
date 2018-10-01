package fr.dorianmaliszewski.chat.controllers;

import fr.dorianmaliszewski.chat.domains.Message;
import fr.dorianmaliszewski.chat.repositories.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/messages")
public class MessageController {

    private final MessageRepository messageRepository;

    @Autowired
    public MessageController(MessageRepository messageRepository) {
        this.messageRepository = messageRepository;
    }

    @GetMapping
    public ResponseEntity<List<Message>> getMessages() {
        return ResponseEntity.ok(messageRepository.findAll());
    }

    @GetMapping("/sayhello")
    public ResponseEntity<String> sayHello() {
        return ResponseEntity.ok("Hello world");
    }

    @PostMapping
    @MessageMapping("/messages")
    @SendTo("/topic/all")
    public ResponseEntity<Message> sendMessage(Message message) {
        message = this.messageRepository.save(message);
        return ResponseEntity.ok(message);
    }

}
