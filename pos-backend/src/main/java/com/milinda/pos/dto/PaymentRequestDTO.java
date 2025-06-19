package com.milinda.pos.dto;

public class PaymentRequestDTO {
    private Integer amount; // Amount in paise (e.g., 50000 = ₹500)
    private String currency;
    private String receipt;

    // Getters and setters
    public Integer getAmount() {
        return amount;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    public String getReceipt() {
        return receipt;
    }

    public void setReceipt(String receipt) {
        this.receipt = receipt;
    }
}
