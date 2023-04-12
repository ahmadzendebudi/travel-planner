import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { City } from './city';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private apiEndpoint: string = "/api"

  private _cityListSubject: Subject<City[]> = new Subject<City[]>();

  constructor(private http: HttpClient) { }

  public get cityListSubject(): Subject<City[]> {
    return this._cityListSubject;
  }

  public requestCities(): void {
    this.http.get<City[]>(this.apiEndpoint + "/city")
      .subscribe((response) => {
        this._cityListSubject.next(response);
        console.log(response);
      })
  }
}
