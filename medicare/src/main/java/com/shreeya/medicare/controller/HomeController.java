package com.shreeya.medicare.controller;

import com.shreeya.medicare.service.GreetingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @Autowired
    GreetingService greetingService;

    @GetMapping("/")
    public String home() {
        return greetingService.welcomeMessage();
    }

    @GetMapping("/about")
    public String about() {
        return greetingService.aboutMessage();
    }

}
