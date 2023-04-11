package com.zendebudi.travelplanner.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.zendebudi.travelplanner.model.CityEntity;
import com.zendebudi.travelplanner.repositories.CityRepository;

public class CityServiceImpl implements CityService{

  @Autowired
  CityRepository cityRepository;

  @Override
  public Optional<CityEntity> findCityById(long id) {
    return cityRepository.findById(id);
  }

  @Override
  public Optional<CityEntity> findCityByName(String name) {
    return cityRepository.findByName(name);
  }
  
}
