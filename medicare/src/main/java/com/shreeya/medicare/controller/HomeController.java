package com.shreeya.medicare.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "Welcome to MediCare Backend";
    }

    @GetMapping("/about")
    public String about() {
        return "This is our first Spring Boot Project";
    }

}
