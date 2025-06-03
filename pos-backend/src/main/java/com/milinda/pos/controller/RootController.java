package com.milinda.pos.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.Map;

@RestController
public class RootController {
    @GetMapping("/")
    public Map<String, String> getRootMessage() {

        // Simulate error for testing
        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Something went wrong!");

//        return Map.of("message", "Hello from POS Server!");
    }

}
