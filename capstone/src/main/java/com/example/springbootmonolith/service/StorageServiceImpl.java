package com.example.springbootmonolith.service;

import com.example.springbootmonolith.models.Storage;
import com.example.springbootmonolith.repositories.StorageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class StorageServiceImpl implements StorageService{

    @Autowired
    private StorageRepository storageRepository;

    @Override
    public Iterable<Storage> listStorage() {
        return storageRepository.findAll();
    }

    @Override
    public Storage  createStorage(Storage storage) {
        return storageRepository.save(storage);
    }

    @Override
    public HttpStatus deleteStorage(Long storageId) {
        storageRepository.deleteById(storageId);
        return HttpStatus.OK;
    }
}
