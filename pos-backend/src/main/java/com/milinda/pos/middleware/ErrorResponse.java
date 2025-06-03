package com.milinda.pos.middleware;

import java.time.LocalDateTime;

public class ErrorResponse {
    private int status;
    private String message;
    private String stack;
    private LocalDateTime timestamp;

    public ErrorResponse(int status, String message, String stack, LocalDateTime timestamp) {
        this.status = status;
        this.message = message;
        this.stack = stack;
        this.timestamp = timestamp;
    }

    public int getStatus() {
        return status;
    }
    public void setStatus(int status) {
        this.status = status;
    }
    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
    public String getStack() {
        return stack;
    }
    public void setStack(String stack) {
        this.stack = stack;
    }

    public LocalDateTime getTimestamp() {
        return timestamp;
    }
    public void setTimestamp(LocalDateTime timestamp) {
        this.timestamp = timestamp;
    }
}
