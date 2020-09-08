package com.example.springbootmonolith.controller;

import com.example.springbootmonolith.models.VideoCards;
import com.example.springbootmonolith.service.VideoCardsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/videocards")
public class VideoCardsController {

    @Autowired
    VideoCardsService videoCardsService;

    @GetMapping
    public Iterable<VideoCards> findAll() {
        return videoCardsService.listVideoCards();
    }

    @PostMapping
    public VideoCards createVideoCards(VideoCards videoCards) {
        return videoCardsService.createVideocards(videoCards);
    }

    @DeleteMapping("/{videocardsId}")
    public HttpStatus deleteVideoCards(@PathVariable Long videocardsId) {
        return videoCardsService.deleteVideoCards(videocardsId);
    }
}
