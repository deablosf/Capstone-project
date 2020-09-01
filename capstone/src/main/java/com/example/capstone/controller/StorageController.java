package com.example.capstone.controller;

import com.example.capstone.models.Storage;
import com.example.capstone.service.StorageService;
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
    public Storage createStorage(@RequestBody Storage storageParam) {
        return storageService.createStorage(storageParam);
    }

    @DeleteMapping("/{storageId}")
    public HttpStatus deleteStorage(@PathVariable Long storageId) {
        return storageService.deleteStorage(storageId);
    }
}
