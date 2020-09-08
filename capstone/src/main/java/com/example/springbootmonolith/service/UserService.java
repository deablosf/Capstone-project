package com.example.springbootmonolith.service;

import com.example.springbootmonolith.models.User;
import org.springframework.http.HttpStatus;

public interface UserService {
        public Iterable<User> listUsers();
        public User createUser(User user );
        public User login(String username, String password);
        public HttpStatus deleteUser(Long userId);
}
