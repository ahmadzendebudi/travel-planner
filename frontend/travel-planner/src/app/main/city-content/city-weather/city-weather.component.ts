import { Component, OnDestroy, OnInit } from '@angular/core';
import { CityService } from '../../city.service';
import { WeatherService } from '../../weather.service';
import { City } from '../../city';
import { Subscription } from 'rxjs';
import { Weather } from '../../weather';
import { WeatherForecast } from '../../weather-forecast';

@Component({
  selector: 'app-city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.css']
})
export class CityWeatherComponent implements OnInit, OnDestroy {

  public weatherForeground: Weather;

  private cityForeground: City;
  constructor(private cityService: CityService, private weatherService: WeatherService) { }

  private citySubscription: Subscription;
  private weatherCurrentSubscription: Subscription;
  private weatherForecastSubscription: Subscription;

  ngOnInit(): void {
    this.weatherCurrentSubscription = this.weatherService.weatherCurrentSubject.subscribe({
      next: weatherCurrent => {
        this.weatherForeground = weatherCurrent;
      }
    });
    this.weatherForecastSubscription = this.weatherService.weatherCurrentSubject.subscribe({
      next: weatherForecast => {
        //TODO
      }
    });
    this.citySubscription = this.cityService.cityForegroundSubject.subscribe({
      next: city => {
        this.cityForeground = city;
        this.weatherService.requestWeatherCurrent(city);
      }
    });
  }

  ngOnDestroy(): void {
    this.weatherCurrentSubscription.unsubscribe();
    this.weatherForecastSubscription.unsubscribe();
    this.citySubscription.unsubscribe();
  }

}
