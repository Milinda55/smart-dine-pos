package com.milinda.pos.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class RootController {
    @GetMapping("/")
    public Map<String, String> getRootMessage() {
        return Map.of("message", "Hello from POS Server!");
    }

}
