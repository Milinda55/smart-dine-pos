package com.milinda.pos.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @PostMapping("/register")
    public String registerUser() {
        // logic to register a user
        return "User registered successfully";
    }

    @PostMapping("/login")
    public String loginUser() {
        // logic to log in a user
        return "User logged in successfully";
    }
}
