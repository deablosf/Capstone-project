package com.example.capstone.controller;

import com.example.capstone.models.VideoCards;
import com.example.capstone.service.VideoCardsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/videoCards")
public class VideoCardsController {

    @Autowired
    VideoCardsService videoCardsService;

    @GetMapping
    public Iterable<VideoCards> findAll() {
        return videoCardsService.listVideoCards();
    }

    @PostMapping
    public VideoCards createVideoCards(@RequestBody VideoCards videoCards) {
        return videoCardsService.createVideoCards();
    }

    @DeleteMapping("/{videoCardsId}")
    public HttpStatus deleteVideoCards(@PathVariable Long videoCardsId) {
        return videoCardsService.deleteVideoCards(videoCardsId);
    }
}
