package com.example.springbootmonolith.service;

import com.example.springbootmonolith.models.Storage;
import org.springframework.http.HttpStatus;

public interface StorageService {

    public Iterable<Storage> listStorage();

    public Storage createStorage(Storage storage);

    public HttpStatus deleteStorage(Long storageId);
}
