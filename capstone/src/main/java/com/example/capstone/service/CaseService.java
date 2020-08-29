package com.example.capstone.service;

import com.example.capstone.models.Cases;
import org.springframework.http.HttpStatus;

public interface CaseService {
    public Iterable<Cases> listCases();
    public Cases createCases(Cases cases);
    public HttpStatus deleteCases(Long casesId);
}
