package com.nationalParkApp.demo.Repository;

import com.nationalParkApp.demo.Model.Favorites;
import com.nationalParkApp.demo.Model.User;
import com.nationalParkApp.demo.entity.FavoritesEntity;
import jakarta.persistence.TypedQuery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FavoritesRepository extends JpaRepository<FavoritesEntity, Long> {

    public List<FavoritesEntity> findAllByParkCode(String parkCode);

    public List<FavoritesEntity> findAllByUserId(Long id);

}
