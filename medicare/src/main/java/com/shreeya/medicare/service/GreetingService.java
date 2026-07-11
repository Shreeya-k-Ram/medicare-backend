package com.shreeya.medicare.service;

import org.springframework.stereotype.Service;

@Service
public class GreetingService {
    public String welcomeMessage() {
        return "Welcome to Medicare Backend";
    }

    public String aboutMessage() {
        return "This is our first Spring Boot Project";
    }
}
