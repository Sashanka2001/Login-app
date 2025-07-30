 package com.example.login.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true") // CORS for React
public class LoginController {

    @PostMapping("/login")
    public String login(@RequestBody LoginRequest request) {
        // Dummy validation – replace with real logic
        if ("admin".equals(request.getUsername()) && "1234".equals(request.getPassword())) {
            return "Login successful";
        } else {
            return "Invalid credentials";
        }
    }

    static class LoginRequest {
        private String username;
        private String password;

        // Getters and setters (required for @RequestBody to work)
        public String getUsername() { return username; }
        public void setUsername(String username) { this.username = username; }

        public String getPassword() { return password; }
        public void setPassword(String password) { this.password = password; }
    }
}
