package com.example.springbootmonolith.service;

import com.example.springbootmonolith.models.Cases;
import com.example.springbootmonolith.repositories.CasesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class CasesServiceImpl implements CasesService{

    @Autowired
    private CasesRepository casesRepository;

    @Override
    public Iterable<Cases> listCases() {
        return casesRepository.findAll();
    }

    @Override
    public Cases createCases(Cases cases) {
        return casesRepository.save(cases);
    }

    @Override
    public HttpStatus deleteCases(Long casesId) {
        casesRepository.deleteById(casesId);
        return HttpStatus.OK;
    }
}
