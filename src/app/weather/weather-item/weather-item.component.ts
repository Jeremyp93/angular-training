import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Weather } from '../weather.model';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.scss']
})
export class WeatherItemComponent implements OnInit, OnDestroy {
  weather?: Weather;
  private weatcherCitySubscription?: Subscription;

  constructor(private weatherService: WeatherService) { }

  ngOnDestroy(): void {
    if (this.weatcherCitySubscription) {
      this.weatcherCitySubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.weatcherCitySubscription = this.weatherService.city.subscribe(city => {
      if (!city) return;
      this.weatherService.getNow(city).subscribe(weatherResult => {
        this.weather = weatherResult;
      });
    });
  }
}
