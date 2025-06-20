package com.milinda.pos.dto;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class PaymentVerificationDTO {
    // Getters and Setters
    private String razorpayOrderId;
    private String razorpayPaymentId;
    private String razorpaySignature;

}
