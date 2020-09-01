package com.example.capstone.service;

import com.example.capstone.models.MotherBoards;
import org.springframework.http.HttpStatus;

public interface MotherBoardsService {
    public Iterable<MotherBoards> listMotherBoards();
    public MotherBoards createMotherBoard(MotherBoards motherBoards);
    public HttpStatus deleteMotherBoard(Long motherBoardId);
}
