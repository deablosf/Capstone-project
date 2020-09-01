package com.example.capstone.repositories;

import com.example.capstone.models.MotherBoards;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface MotherBoardsRepository extends CrudRepository<MotherBoards, Long>{
}
