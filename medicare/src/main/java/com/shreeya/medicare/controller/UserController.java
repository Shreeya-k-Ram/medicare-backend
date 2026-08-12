package com.shreeya.medicare.controller;

import com.shreeya.medicare.entity.User;
import com.shreeya.medicare.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
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

    @PostMapping("/forgot-password")
    public ResponseEntity<String> forgotPassword(
            @RequestParam String email) {

        boolean exists = userService.forgotPassword(email);

        if (!exists) {
            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body("No account found with this email");
        }

        return ResponseEntity.ok(
                "Password reset request accepted"
        );
    }

    @PostMapping("/reset-password")
    public ResponseEntity<String> resetPassword(
            @RequestParam String email,
            @RequestParam String newPassword) {

        boolean reset = userService.resetPassword(email, newPassword);

        if (!reset) {
            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body("No account found with this email");
        }

        return ResponseEntity.ok(
                "Password reset successfully"
        );
    }

    @GetMapping("/admin/test")
    public String AdminTest() {
        return "Welcome Admin!";
    }
}