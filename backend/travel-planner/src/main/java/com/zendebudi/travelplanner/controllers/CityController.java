package com.zendebudi.travelplanner.controllers;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.zendebudi.travelplanner.exceptions.NotFoundException;
import com.zendebudi.travelplanner.model.CityEntity;
import com.zendebudi.travelplanner.model.CityJson;
import com.zendebudi.travelplanner.services.CityService;

@RestController
@RequestMapping("/city")
public class CityController {

  @Autowired
  CityService cityService;
  
  @GetMapping("/{name}")
  public CityJson getCity(@PathVariable String name) {
    Optional<CityEntity> cityEntity = cityService.findCityByName(name);
    if (cityEntity == null) {
      throw new NotFoundException();
    }
    return new CityJson(cityEntity.get());
  }

  @ExceptionHandler(NotFoundException.class)
  public ResponseEntity<Map<String, Object>> CityNotFoundException() {
    Map<String, Object> body = new HashMap<>();
    body.put("timestamp", LocalDateTime.now());
    body.put("message", "No cities found");

    return new ResponseEntity<>(body, HttpStatus.NOT_FOUND);
  }
}
