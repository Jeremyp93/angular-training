import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { Subscription } from 'rxjs';
import { Weather } from './weather.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit, OnDestroy {
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
      this.weatherService.getNow(city).subscribe(weatherResult => {
        this.weather = weatherResult;
      });
    });
    this.weatherService.city.next('Montreal');
  }
}
