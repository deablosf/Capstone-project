package com.example.capstone.controller;

import com.example.capstone.models.MotherBoards;
import com.example.capstone.service.MotherBoardsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/motherboards")
public class MotherBoardController {

    @Autowired
    MotherBoardsService motherBoardsService;

    @GetMapping
    public Iterable<MotherBoards> findAll() {
        return motherBoardsService.listMotherBoards();
    }

    @PostMapping
    public MotherBoards createMotherBoards(MotherBoards motherBoardsParam) {
        return motherBoardsService.createMotherBoard(motherBoardsParam);
    }

    @DeleteMapping("/{motherBoarId}")
    public HttpStatus deleteMotherBoard(@PathVariable Long motherBoardId) {
        return motherBoardsService.deleteMotherBoard(motherBoardId);
    }
}
