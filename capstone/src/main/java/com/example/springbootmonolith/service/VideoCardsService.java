package com.example.springbootmonolith.service;

import com.example.springbootmonolith.models.VideoCards;
import org.springframework.http.HttpStatus;

public interface VideoCardsService {

    public Iterable<VideoCards> listVideoCards();

    public VideoCards createVideocards(VideoCards videoCards);

    public HttpStatus deleteVideoCards(Long videoCardsId);
}
