package com.example.capstone.service;

import com.example.capstone.models.VideoCards;
import org.springframework.http.HttpStatus;

public interface VideoCardsService {
    public Iterable<VideoCards> listVideoCards();
    public VideoCards createVideoCards();

    VideoCards createVideoCards(VideoCards videoCards);

    public HttpStatus deleteVideoCards(Long videoCardsId);
}
