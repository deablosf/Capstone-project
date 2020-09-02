package com.example.capstone.service;

import com.example.capstone.models.Storage;
import com.example.capstone.repositories.StorageReposity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class StorageServiceImpl implements StorageService{

    @Autowired
    private StorageReposity storageReposity;

    @Override
    public Iterable<Storage> listStorage() {
        return storageReposity.findAll();
    }

    @Override
    public Storage createStorage(Storage storage) {
        return storageReposity.save(storage);
    }

    @Override
    public HttpStatus deleteStorage(Long storageId) {
        storageReposity.deleteById(storageId);
        return HttpStatus.OK;
    }
}
