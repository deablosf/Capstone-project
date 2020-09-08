package com.example.springbootmonolith.controller;

import com.example.springbootmonolith.models.Storage;
import com.example.springbootmonolith.service.StorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/storage")
public class StorageController {

    @Autowired
    StorageService storageService;

    @GetMapping
    public Iterable<Storage> findAll() {
        return storageService.listStorage();
    }

    @PostMapping
    public Storage createStorage(Storage storage) {
        return storageService.createStorage(storage);
    }

    @DeleteMapping("/{storageId}")
    public HttpStatus deleteStorage(@PathVariable Long storageId) {
        return storageService.deleteStorage(storageId);
    }
}
