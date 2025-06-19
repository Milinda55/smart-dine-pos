package com.milinda.pos.controller;

import com.milinda.pos.dto.PaymentRequestDTO;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;
import jakarta.validation.Valid;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.Instant;
import java.util.Collection;

@RestController
@RequestMapping("/api/payment")
public class PaymentController {

    private final RazorpayClient razorpayClient;

    @Autowired
    public PaymentController(RazorpayClient razorpayClient) {
        this.razorpayClient = razorpayClient;
    }

    @PostMapping("/create-order")
    public ResponseEntity<?> createOrder(@Valid @RequestBody PaymentRequestDTO paymentRequest) {
        try {
            JSONObject orderRequest = new JSONObject();
            orderRequest.put("amount", paymentRequest.getAmount());
            orderRequest.put("currency", paymentRequest.getCurrency() != null ?
                    paymentRequest.getCurrency() : "INR");
            orderRequest.put("receipt", paymentRequest.getReceipt() != null ?
                    paymentRequest.getReceipt() : "receipt_" + System.currentTimeMillis());

            com.razorpay.Order razorpayOrder = razorpayClient.orders.create(orderRequest);

            JSONObject orderJson = new JSONObject(razorpayOrder.toString());

            JSONObject response = new JSONObject();
            response.put("success", true);
            response.put("order", orderJson);

            return ResponseEntity.ok(response.toString());
        } catch (RazorpayException e) {
            e.printStackTrace();
            JSONObject errorResponse = new JSONObject();
            errorResponse.put("success", false);
            errorResponse.put("error", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(errorResponse.toString());
        }
    }
}
