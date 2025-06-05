package com.milinda.pos.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@Data
@Document(collection = "orders")
public class Order {

    @Id
    private String id;

    private CustomerDetails customerDetails;
    private String orderStatus;
    private Date orderDate = new Date();
    private BillDetails bills;
    private List<OrderItem> items;

    @Data
    public static class CustomerDetails {
        private String name;
        private String phone;
        private int guests;
    }

    @Data
    public static class BillDetails {
        private double total;
        private double tax;
        private double totalWithTax;
    }

    @Data
    public static class OrderItem {
        private String productId;
        private String name;
        private int quantity;
        private double price;
    }

    @LastModifiedDate
    private LocalDateTime updatedAt;

    @DBRef
    private Table table;
}
