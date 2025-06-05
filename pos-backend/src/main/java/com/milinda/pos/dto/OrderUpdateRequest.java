package com.milinda.pos.dto;

import lombok.Data;

import java.util.List;

@Data
public class OrderUpdateRequest {
    private String orderStatus;
    private BillDetails bills;
    private CustomerDetails customerDetails;
    private List<OrderItem> items;

    @Data
    public static class BillDetails {
        private Double total;
        private Double tax;
        private Double totalWithTax;
    }

    @Data
    public static class CustomerDetails {
        private String name;
        private String phone;
        private Integer guests;
    }

    @Data
    public static class OrderItem {
        private String productId;
        private String name;
        private Integer quantity;
        private Double price;
    }
}