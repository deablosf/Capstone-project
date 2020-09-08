package com.example.springbootmonolith.service;

import com.example.springbootmonolith.models.MotherBoards;
import com.example.springbootmonolith.repositories.MotherBoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class MotherBoardsServiceImpl implements MotherBoardsService{

    @Autowired
    private MotherBoardRepository motherBoardRepository;

    @Override
    public Iterable<MotherBoards> listMotherBoards() {
        return motherBoardRepository.findAll();
    }

    @Override
    public MotherBoards createMotherBoards(MotherBoards motherBoards) {
        return motherBoardRepository.save(motherBoards);
    }

    @Override
    public HttpStatus deleteMotherBoards(Long motherBoardsId) {
        motherBoardRepository.deleteById(motherBoardsId);
        return HttpStatus.OK;
    }
}
