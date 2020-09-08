package com.example.springbootmonolith.service;

import com.example.springbootmonolith.models.Ram;
import com.example.springbootmonolith.repositories.RamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class RamServiceImpl implements RamService{

    @Autowired
    private RamRepository ramRepository;

    @Override
    public Iterable<Ram> listRam() {
        return ramRepository.findAll();
    }

    @Override
    public Ram createRam(Ram ram) {
        return ramRepository.save(ram);
    }

    @Override
    public HttpStatus deleteRam(Long ramId) {
        ramRepository.deleteById(ramId);
        return HttpStatus.OK;
    }
}
