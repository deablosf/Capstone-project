package com.example.capstone.repositories;

import com.example.capstone.models.Storage;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface StorageReposity extends CrudRepository<Storage, Long>{
}
