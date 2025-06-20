package com.milinda.pos.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.milinda.pos.dto.RazorpayWebhookPayload;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;
import java.security.NoSuchAlgorithmException;
import java.security.InvalidKeyException;

@RestController
@RequestMapping("/api/payment")
public class WebhookController {

    @Value("${razorpay.webhook.secret}")
    private String webhookSecret;

    @PostMapping("/webhook-verification")
    public ResponseEntity<?> handleWebhook(
            @RequestBody String rawBody,
            @RequestHeader("x-razorpay-signature") String razorpaySignature) {

        try {
            // Verify the signature
            String generatedSignature = calculateSignature(rawBody, webhookSecret);

            if (!generatedSignature.equals(razorpaySignature)) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                        .body("Invalid signature");
            }

            // Parse the JSON payload
            ObjectMapper objectMapper = new ObjectMapper();
            RazorpayWebhookPayload payload = objectMapper.readValue(rawBody, RazorpayWebhookPayload.class);

            // Process different webhook events
            if ("payment.captured".equals(payload.getEvent())) {
                RazorpayWebhookPayload.WebhookPaymentPayload.PaymentEntity payment =
                        payload.getPayload().getPayment();

                System.out.printf("💰 Payment Captured: %d %s%n",
                        payment.getAmount() / 100,
                        payment.getCurrency());

                // TODO: Update database, send email, etc.
            }

            return ResponseEntity.ok().body("{\"success\": true}");

        } catch (NoSuchAlgorithmException | InvalidKeyException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error verifying signature");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("Error processing webhook");
        }
    }

    private String calculateSignature(String data, String secret)
            throws NoSuchAlgorithmException, InvalidKeyException {

        Mac sha256_HMAC = Mac.getInstance("HmacSHA256");
        SecretKeySpec secret_key = new SecretKeySpec(
                secret.getBytes(StandardCharsets.UTF_8),
                "HmacSHA256"
        );
        sha256_HMAC.init(secret_key);

        byte[] bytes = sha256_HMAC.doFinal(data.getBytes(StandardCharsets.UTF_8));
        StringBuilder result = new StringBuilder();
        for (byte b : bytes) {
            result.append(String.format("%02x", b));
        }
        return result.toString();
    }
}