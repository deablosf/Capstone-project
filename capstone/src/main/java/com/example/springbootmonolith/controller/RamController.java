package com.example.springbootmonolith.controller;

import com.example.springbootmonolith.models.Ram;
import com.example.springbootmonolith.service.RamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/ram")
public class RamController {

    @Autowired
    RamService ramService;

    @GetMapping
    public Iterable<Ram> findAll() {
        return ramService.listRam();
    }

    @PostMapping
    public Ram createRam(Ram ram) {
        return ramService.createRam(ram);
    }

    @DeleteMapping("/{ramId}")
    public HttpStatus deleteRam(@PathVariable Long ramId) {
        return ramService.deleteRam(ramId);
    }
}
