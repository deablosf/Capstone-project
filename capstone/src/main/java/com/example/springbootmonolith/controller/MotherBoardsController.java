package com.example.springbootmonolith.controller;

import com.example.springbootmonolith.models.MotherBoards;
import com.example.springbootmonolith.service.MotherBoardsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/motherboards")
public class MotherBoardsController {

    @Autowired
    MotherBoardsService motherBoardsService;

    @GetMapping
    public Iterable<MotherBoards> findAll() {
        return motherBoardsService.listMotherBoards();
    }

    @PostMapping
    public MotherBoards createMotherBoards(MotherBoards motherBoards) {
        return motherBoardsService.createMotherBoards(motherBoards);
    }

    @DeleteMapping("/{motherboardsId}")
    public HttpStatus deleteMotherBoards(@PathVariable Long motherBoardsId) {
        return motherBoardsService.deleteMotherBoards(motherBoardsId);
    }
}
