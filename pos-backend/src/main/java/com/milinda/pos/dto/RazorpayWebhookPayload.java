package com.milinda.pos.dto;

import lombok.Data;

@Data
public class RazorpayWebhookPayload {
    private String event;
    private WebhookPaymentPayload payload;

    @Data
    public static class WebhookPaymentPayload {
        private PaymentEntity payment;

        @Data
        public static class PaymentEntity {
            private String id;
            private int amount;
            private String currency;
            private String status;
        }
    }
}