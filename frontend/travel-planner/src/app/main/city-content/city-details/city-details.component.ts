import { Component, OnDestroy, OnInit } from '@angular/core';
import { CityService } from '../../city.service';
import { City } from '../../city';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.css']
})
export class CityDetailsComponent implements OnInit, OnDestroy {

  public city: City;

  private citySubscription: Subscription;

  constructor(private cityService: CityService) { }

  ngOnInit(): void {
    this.citySubscription = this.cityService.cityForegroundSubject.subscribe({
      next: city => {
        this.city = city;
        console.log("reached")
      }
    });
  }

  ngOnDestroy(): void {
    this.citySubscription.unsubscribe();
  }
}
