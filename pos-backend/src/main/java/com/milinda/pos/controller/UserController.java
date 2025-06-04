package com.milinda.pos.controller;

import com.milinda.pos.model.User;
import com.milinda.pos.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {

        if (user.getName() == null || user.getEmail() == null || user.getPassword() == null ||
                user.getPhone() == null || user.getRole() == null) {
            return ResponseEntity.badRequest().body(Map.of("message", "All fields are required"));
        }

        if (userService.isUserExists(user.getEmail())) {
            return ResponseEntity.badRequest().body(Map.of("message", "User already exists"));
        }

        User newUser = userService.saveUser(user);

        return ResponseEntity.status(201).body(Map.of(
                "success", true,
                "message", "New user created",
                "data", newUser
        ));
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody Map<String, String> loginData) {
        // Implement next
        return ResponseEntity.ok().body(Map.of("message", "Login logic to be implemented"));
    }
}
