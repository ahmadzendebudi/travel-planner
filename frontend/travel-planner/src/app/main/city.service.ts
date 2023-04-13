import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { City } from './city';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private apiEndpoint: string = environment.backendUrl;

  private _cityListSubject: Subject<City[]> = new Subject<City[]>();
  private _cityForegroundSubject: Subject<City> = new Subject<City>();

  constructor(private http: HttpClient) { }

  public get cityListSubject(): Subject<City[]> {
    return this._cityListSubject;
  }

  public get cityForegroundSubject(): Subject<City> {
    return this._cityForegroundSubject;
  }

  public requestCities(): void {
    this.http.get<City[]>(this.apiEndpoint + "/city")
      .subscribe((response) => {
        this._cityListSubject.next(response);
        console.log(response);
      })
  }

  public foregroundCity(cityName: String): void {
    this.http.get<City>(this.apiEndpoint + "/city/" + cityName)
      .subscribe((response) => {
        this._cityForegroundSubject.next(response);
        console.log(response);
      })
  }
}
