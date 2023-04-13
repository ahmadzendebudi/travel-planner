package com.zendebudi.travelplanner.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public class CityJson {

  @JsonIgnore
  private CityEntity cityEntity;

  @JsonInclude
  public String getName() {
    return cityEntity.getName();
  }

  @JsonInclude
  public String getDescription() {
    return cityEntity.getDescription();
  }
  
  @JsonInclude
  public String getLat() {
    return cityEntity.getLat();
  }
  
  @JsonInclude
  public String getLon() {
    return cityEntity.getLon();
  }

  @JsonInclude
  public String getLabel() {
    return cityEntity.getLabel();
  }

  @JsonIgnore
  public CityEntity getEntity() {
    return cityEntity;
  }
}
