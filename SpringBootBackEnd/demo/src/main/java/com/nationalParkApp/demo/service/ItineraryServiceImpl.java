package com.nationalParkApp.demo.service;


import com.nationalParkApp.demo.Model.Review;
import com.nationalParkApp.demo.Repository.ItineraryRepository;
import com.nationalParkApp.demo.entity.ItineraryEntity;
import com.nationalParkApp.demo.Model.Itinerary;
import com.nationalParkApp.demo.entity.ReviewEntity;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class ItineraryServiceImpl implements ItineraryService {

    private ItineraryRepository itineraryRepository;

    public ItineraryServiceImpl(ItineraryRepository itineraryRepository) {this.itineraryRepository = itineraryRepository;}

    @Override
    public ResponseEntity createItinerary(Itinerary itinerary) {
        ResponseEntity response = null;
        try {
            ItineraryEntity itineraryEntity = new ItineraryEntity();

            BeanUtils.copyProperties(itinerary, itineraryEntity);
            itineraryRepository.save(itineraryEntity);
            if (itineraryEntity.getId()>0) {
                response = ResponseEntity
                        .status(HttpStatus.CREATED)
                        .body(itineraryEntity);
            }}
        catch (Exception ex) {
            response = ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("AN exception occurred due to " + ex.getMessage());
        }

        return response;
    }

    @Override
    public boolean deleteItinerary(Long id) {
        ItineraryEntity itineraryEntity = itineraryRepository.findById(id).get();
        itineraryRepository.delete(itineraryEntity);
        return true;
    }

    @Override
    public List<Itinerary> getAllItinerariesByParkCode(String parkCode) {
        List<ItineraryEntity> itineraryEntities = itineraryRepository.findAllByParkCode(parkCode);

        List<Itinerary> itineraries = itineraryEntities.stream().map(iti -> new Itinerary(
                        iti.getId(),
                        iti.getStartDate(),
                        iti.getEndDate(),
                        iti.getParkCode(),
                        iti.getUser()))
                .collect(Collectors.toList());
        return itineraries;
    }

    @Override
    public ResponseEntity getAllItinerariesByUserId(Long userId) {
        ResponseEntity response = null;
        try {
            List<ItineraryEntity> itineraryEntities = itineraryRepository.findAllByUserId(userId);
            if (!itineraryEntities.isEmpty()) {
                List<Itinerary> itineraries = itineraryEntities.stream().map(iti -> new Itinerary(
                                iti.getId(),
                                iti.getStartDate(),
                                iti.getEndDate(),
                                iti.getParkCode(),
                                iti.getUser()))
                        .collect(Collectors.toList());
                response = ResponseEntity
                        .status(HttpStatus.ACCEPTED)
                        .body(itineraries);
            } else {
                response = ResponseEntity
                        .status(HttpStatus.OK)
                        .body("No itineraries found");
            }
        } catch (Exception ex) {
            response = ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("AN exception occurred due to " + ex.getMessage());
        }

        return response;
    }
}
