import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Weather } from './weather';
import { WeatherForecast } from './weather-forecast';
import { HttpClient } from '@angular/common/http';
import { City } from './city';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private _apiKey: string = environment.weatherApiKey;

  private _weatherCurrentSubject: Subject<Weather> = new Subject<Weather>();
  private _weatherForecastSubject: Subject<WeatherForecast> = new Subject<WeatherForecast>();

  constructor(private http: HttpClient) { }

  public get weatherCurrentSubject(): Subject<Weather> {
    return this._weatherCurrentSubject;
  }
  
  public get weatherForecastSubject(): Subject<WeatherForecast> {
    return this._weatherForecastSubject;
  }

  public requestWeatherCurrent(city: City): void {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=${this._apiKey}`;
    this.http.get<Weather>(url)
      .subscribe((response) => {
        this._weatherCurrentSubject.next(response);
        console.log(response);
      });
  }

  public requestWeatherForecast(city: City): void {
    let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&appid=${this._apiKey}`;
    this.http.get<WeatherForecast>(url)
      .subscribe((response) => {
        this._weatherForecastSubject.next(response);
        console.log(response);
      });
  }
}
