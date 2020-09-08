package com.example.springbootmonolith.service;

import com.example.springbootmonolith.models.Cases;
import org.springframework.http.HttpStatus;

public interface CasesService {
    public Iterable<Cases> listCases();
    public Cases createCases(Cases cases);
    public HttpStatus deleteCases(Long casesId);
}
