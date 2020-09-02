package com.example.capstone.service;

import com.example.capstone.models.MotherBoards;
import com.example.capstone.repositories.MotherBoardsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class MotherBoardsServiceImpl implements MotherBoardsService{

    @Autowired
    private MotherBoardsRepository motherBoardsRepository;

    @Override
    public Iterable<MotherBoards> listMotherBoards() {
        return motherBoardsRepository.findAll();
    }

    @Override
    public MotherBoards createMotherBoard(MotherBoards motherBoards) {
        return motherBoardsRepository.save(motherBoards);
    }

    @Override
    public HttpStatus deleteMotherBoard(Long motherBoardId) {
        motherBoardsRepository.deleteById(motherBoardId);
        return HttpStatus.OK;
    }
}
