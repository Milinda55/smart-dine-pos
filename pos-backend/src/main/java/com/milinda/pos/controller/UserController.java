package com.milinda.pos.controller;

import com.milinda.pos.model.User;
import com.milinda.pos.repository.UserRepository;
import com.milinda.pos.service.UserService;
import com.milinda.pos.util.JwtTokenUtil;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.time.Duration;
import java.time.LocalDateTime;
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
    public ResponseEntity<?> loginUser(@RequestBody Map<String, String> loginData, HttpServletResponse response) {

        try {
            String email = loginData.get("email");
            String password = loginData.get("password");

            // 1. Validate fields
            if (email == null || password == null) {
                return ResponseEntity.badRequest().body(Map.of(
                        "status", 400,
                        "message", "All fields are required",
                        "timestamp", LocalDateTime.now()
                ));
            }

            // 2. Find user or throw 401
            User user = userRepository.findByEmail(email)
                    .orElseThrow(() -> new ResponseStatusException(
                            HttpStatus.UNAUTHORIZED,
                            "Invalid credentials"
                    ));

            // 3. Check password or throw 401
            if (!passwordEncoder.matches(password, user.getPassword())) {
                throw new ResponseStatusException(
                        HttpStatus.UNAUTHORIZED,
                        "Invalid credentials"
                );
            }

            // 4. Generate JWT
            String token = jwtTokenUtil.generateToken(user.getId());

            // Set HTTP-only cookie
            Cookie cookie = new Cookie("accessToken", token);
            cookie.setHttpOnly(true);
            cookie.setSecure(true);
            cookie.setPath("/");
            cookie.setMaxAge(30 * 24 * 60 * 60);  // 30 days
            response.addCookie(cookie);

            // 6. Return success response
            return ResponseEntity.ok().body(Map.of(
                    "status", 200,
                    "message", "Login successful",
                    "data", user
            ));
        } catch (ResponseStatusException ex) {
            assert ex.getReason() != null;
            return ResponseEntity.status(ex.getStatusCode()).body(Map.of(
                    "status", ex.getStatusCode().value(),
                    "message", ex.getReason(),
                    "timestamp", LocalDateTime.now()
            ));
        }
    }
}
