package com.example.capstone.controller;

import com.example.capstone.models.Ram;
import com.example.capstone.service.RamService;
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
    public Ram createRam(@RequestBody Ram ramParam) {
        return ramService.createRam(ramParam);
    }

    @DeleteMapping("/ramId")
    public HttpStatus deleteRam(@PathVariable Long ramId) {
        return ramService.deleteRam(ramId);
    }

}
