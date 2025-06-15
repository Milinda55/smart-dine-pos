package com.milinda.pos.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "tables")
public class Table {

    @Id
    private String id;

    @Indexed(unique = true)
    private Integer tableNo;

    private String status = "Available";

    private Integer seats;

    @DBRef
    private Order currentOrder;

    public enum TableStatus {
        AVAILABLE, OCCUPIED, RESERVED, CLEANING
    }
}
