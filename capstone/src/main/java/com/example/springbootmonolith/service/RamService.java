package com.example.springbootmonolith.service;

import com.example.springbootmonolith.models.Ram;
import org.springframework.http.HttpStatus;

public interface RamService {
    public Iterable<Ram> listRam();

    public Ram createRam(Ram ram);

    public HttpStatus deleteRam(Long ramId);
}
