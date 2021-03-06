package com.example.springbootmonolith.service;

import com.example.springbootmonolith.models.VideoCards;
import com.example.springbootmonolith.repositories.VideoCardsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class VideoCardsServiceImpl implements VideoCardsService{

    @Autowired
    private VideoCardsRepository videoCardsRepository;

    @Override
    public Iterable<VideoCards> listVideoCards() {
        return videoCardsRepository.findAll();
    }

    @Override
    public VideoCards createVideocards(VideoCards videoCards) {
        return videoCardsRepository.save(videoCards);
    }

    @Override
    public HttpStatus deleteVideoCards(Long videoCardsId) {
        videoCardsRepository.deleteById(videoCardsId);
        return HttpStatus.OK;
    }
}
