package fr.dorianmaliszewski.chat.domains;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;

@Data
@Entity
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class Message extends BaseId {
    private String body;
    private String from;
    private String to;
}
