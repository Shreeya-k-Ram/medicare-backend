package com.shreeya.medicare.service;

import com.shreeya.medicare.entity.User;
import com.shreeya.medicare.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    public User registerUser(User user) {
        user.setPassword(passwordEncoder().encode(user.getPassword()));

        return userRepository.save(user);
    }
}
