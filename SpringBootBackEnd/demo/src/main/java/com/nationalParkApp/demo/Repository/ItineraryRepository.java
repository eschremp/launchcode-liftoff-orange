package com.nationalParkApp.demo.Repository;

import com.nationalParkApp.demo.entity.ItineraryEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ItineraryRepository extends JpaRepository<ItineraryEntity, Long> {

    public List<ItineraryEntity> findAllByParkCode(String parkCode);

    public List<ItineraryEntity> findAllByUserId(Long userId);
}
