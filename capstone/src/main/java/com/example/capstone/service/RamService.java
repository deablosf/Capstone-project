package com.example.capstone.service;

import com.example.capstone.models.Ram;
import org.springframework.http.HttpStatus;

public interface RamService {
    public Iterable<Ram> listRam();
    public Ram createRam(Ram ram);
    public HttpStatus deleteRam(Long ramId);
}
