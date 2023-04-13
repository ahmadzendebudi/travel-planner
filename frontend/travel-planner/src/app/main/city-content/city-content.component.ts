import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CityService } from '../city.service';

@Component({
  selector: 'app-city-content',
  templateUrl: './city-content.component.html',
  styleUrls: ['./city-content.component.css']
})
export class CityContentComponent implements OnInit, OnDestroy {

  constructor(private activatedRoute: ActivatedRoute, private cityService: CityService) { }

  paramsSubscription: Subscription;
  ngOnInit(): void {
    this.paramsSubscription = this.activatedRoute.params.subscribe({
      next: params => {
        this.cityService.foregroundCity(params["city"]);
      }
    });
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }
}
