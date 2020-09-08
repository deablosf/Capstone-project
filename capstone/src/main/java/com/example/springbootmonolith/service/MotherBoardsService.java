package com.example.springbootmonolith.service;

import com.example.springbootmonolith.models.MotherBoards;
import org.springframework.http.HttpStatus;

public interface MotherBoardsService {

    public Iterable<MotherBoards> listMotherBoards();

    public MotherBoards createMotherBoards(MotherBoards motherBoards);

    public HttpStatus deleteMotherBoards(Long motherBoardsId);
}
