package com.zendebudi.travelplanner.services;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.zendebudi.travelplanner.model.CityEntity;

@Service
public interface CityService {
  public Optional<CityEntity> findCityById(long id);
  public Optional<CityEntity> findCityByName(String name);
}
