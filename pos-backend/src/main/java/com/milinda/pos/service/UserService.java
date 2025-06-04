package com.milinda.pos.service;

import com.milinda.pos.model.User;
import com.milinda.pos.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired  // Inject the PasswordEncoder bean
    private PasswordEncoder passwordEncoder;

    public boolean isUserExists(String email) {
        return userRepository.findByEmail(email).isPresent();
    }

    public User saveUser(User user) {

//         Hash password before saving
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        return userRepository.save(user);
    }
}

