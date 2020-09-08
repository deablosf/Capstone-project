package com.example.springbootmonolith.controller;

import com.example.springbootmonolith.models.Cases;
import com.example.springbootmonolith.service.CasesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/cases")
public class CasesController {

    @Autowired
    CasesService casesService;

    @GetMapping
    public Iterable<Cases> findAll() {
        return casesService.listCases();
    }

    @PostMapping
    public Cases createCases(@RequestBody Cases cases) {
        return casesService.createCases(cases);
    }

    @DeleteMapping("/{casesId}")
    public HttpStatus deleteCases(@PathVariable Long casesId) {
        return casesService.deleteCases(casesId);
    }

}
