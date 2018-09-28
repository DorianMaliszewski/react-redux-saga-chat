package fr.dorianmaliszewski.chat.repositories;

import fr.dorianmaliszewski.chat.domains.Message;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MessageRepository extends JpaRepository<Message, Long> {
}
