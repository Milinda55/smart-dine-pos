package com.milinda.pos.controller;

import com.milinda.pos.model.User;
import com.milinda.pos.repository.UserRepository;
import com.milinda.pos.service.UserService;
import com.milinda.pos.util.JwtTokenUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
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
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private JwtTokenUtil jwtTokenUtil;

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
        String email = loginData.get("email");
        String password = loginData.get("password");

        // 1. Validate fields
        if (email == null || password == null) {
            return ResponseEntity.badRequest().body(Map.of("message", "All fields are required"));
        }

        // 2. Find user
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Invalid credentials"));

        // 3. Check password
        if (!passwordEncoder.matches(password, user.getPassword())) {
            throw new RuntimeException("Invalid credentials");
        }

        // 4. Generate JWT
        String token = jwtTokenUtil.generateToken(user.getId());

        // 5. Return token (or set in cookie)
        return ResponseEntity.ok().body(Map.of(
                "success", true,
                "message", "Login successful",
                "token", token,
                "data", user
        ));
    }
}
