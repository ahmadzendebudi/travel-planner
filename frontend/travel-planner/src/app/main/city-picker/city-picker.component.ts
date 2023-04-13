import { Component, OnDestroy, OnInit } from '@angular/core';
import { City } from '../city';
import { CityService } from '../city.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-city-picker',
  templateUrl: './city-picker.component.html',
  styleUrls: ['./city-picker.component.css']
})
export class CityPickerComponent implements OnInit, OnDestroy {


  public cities: City[] = [];

  private cityListSubscription: Subscription;

  constructor(private cityService: CityService) { }

  ngOnInit(): void {
    this.cityListSubscription = this.cityService.cityListSubject.subscribe({
      next: cities => {
        this.cities = cities;
      }
    });
    this.cityService.requestCities();
  }

  ngOnDestroy(): void {
      this.cityListSubscription.unsubscribe();
  }

}
