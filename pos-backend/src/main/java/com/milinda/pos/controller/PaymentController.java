package com.milinda.pos.controller;

import com.milinda.pos.config.RazorPayConfig;
import com.milinda.pos.dto.PaymentRequestDTO;
import com.milinda.pos.dto.PaymentVerificationDTO;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;
import io.jsonwebtoken.Jwt;
import jakarta.validation.Valid;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
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
                    paymentRequest.getCurrency() : "LKR");
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

    @PostMapping("/verify-payment")
    public ResponseEntity<?> verifyPayment(
            @Valid @RequestBody PaymentVerificationDTO verificationRequest,
            @AuthenticationPrincipal Jwt jwt) {

        try {
            // Verify the payment signature
            String generatedSignature = generateSignature(
                    verificationRequest.getRazorpayOrderId(),
                    verificationRequest.getRazorpayPaymentId()
            );

            boolean isValid = generatedSignature.equals(verificationRequest.getRazorpaySignature());

            if (!isValid) {
                JSONObject response = new JSONObject();
                response.put("success", false);
                response.put("message", "Payment verification failed");
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response.toString());
            }

            // If valid, process the payment (save to a database, etc.)

            JSONObject response = new JSONObject();
            response.put("success", true);
            response.put("message", "Payment verified successfully");
            return ResponseEntity.ok(response.toString());

        } catch (Exception e) {
            JSONObject response = new JSONObject();
            response.put("success", false);
            response.put("error", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(response.toString());
        }
    }

    private String generateSignature(String orderId, String paymentId) throws NoSuchAlgorithmException, InvalidKeyException {
        String data = orderId + "|" + paymentId;
        Mac sha256_HMAC = Mac.getInstance("HmacSHA256");
        SecretKeySpec secret_key = new SecretKeySpec(
                RazorPayConfig.getKeySecret().getBytes(StandardCharsets.UTF_8),
                "HmacSHA256"
        );
        sha256_HMAC.init(secret_key);
        byte[] bytes = sha256_HMAC.doFinal(data.getBytes(StandardCharsets.UTF_8));
        return bytesToHex(bytes);
    }

    private static String bytesToHex(byte[] bytes) {
        StringBuilder result = new StringBuilder();
        for (byte b : bytes) {
            result.append(String.format("%02x", b));
        }
        return result.toString();
    }
}
