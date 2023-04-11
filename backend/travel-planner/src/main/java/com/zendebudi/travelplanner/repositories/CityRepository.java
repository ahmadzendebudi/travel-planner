package com.zendebudi.travelplanner.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.zendebudi.travelplanner.model.CityEntity;

public interface CityRepository extends JpaRepository<CityEntity, Long>{
  Optional<CityEntity> findByName(String name);
}
