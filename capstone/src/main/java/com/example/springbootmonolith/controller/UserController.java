package com.example.springbootmonolith.controller;

import com.example.springbootmonolith.models.User;
import com.example.springbootmonolith.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping
    public Iterable<User> findAll() {
        return userService.listUsers();
    }

    @PostMapping
    public User createUser(@RequestBody User userParam) {
        return userService.createUser(userParam);
    }

    @GetMapping("/login/{usernameParam}/{passwordParam}")
    public User login(@PathVariable String usernameParam, @PathVariable String passwordParam) {
        return userService.login(usernameParam, passwordParam);
    }

    @DeleteMapping("/{userId}")
    public HttpStatus deleteUser(@PathVariable Long userId) {
        return userService.deleteUser(userId);
    }
}