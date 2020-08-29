package com.example.capstone.controller;

import com.example.capstone.models.Cases;
import com.example.capstone.service.CaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/cases")
public class CasesController {

    @Autowired
    CaseService caseService;

    @GetMapping
    public Iterable<Cases> findAll() {
        return caseService.listCases();
    }

    @PostMapping
    public Cases createCases(@RequestBody Cases casesParam) {
        return caseService.createCases(casesParam);
    }

    @DeleteMapping("/{casesId}")
    public HttpStatus deleteCases(@PathVariable Long casesId) {
        return caseService.deleteCases(casesId);
    }
}
