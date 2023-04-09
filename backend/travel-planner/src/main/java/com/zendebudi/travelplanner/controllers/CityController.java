package com.zendebudi.travelplanner.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CityController {
  
  @GetMapping("/city")
  public String getCity() {
    return "Giving City!";
  }
}
