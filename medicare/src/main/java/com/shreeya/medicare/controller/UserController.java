package com.shreeya.medicare.controller;

import com.shreeya.medicare.entity.User;
import com.shreeya.medicare.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.shreeya.medicare.dto.LoginRequestDTO;
import com.shreeya.medicare.dto.LoginResponseDTO;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public User register(@RequestBody User user) {
        return userService.registerUser(user);
    }

    @PostMapping("/login")
    public LoginResponseDTO login(@RequestBody LoginRequestDTO request) {
        return userService.loginUser(request);
    }
}