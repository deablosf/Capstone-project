package com.example.capstone.repositories;

import com.example.capstone.models.VideoCards;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface VideoCardsRepository extends CrudRepository<VideoCards, Long>{
}
