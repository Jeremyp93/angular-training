import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  previousCities: string[] = [];

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.previousCities = this.weatherService.previousCities();
  }

  public onSelectCity = (city: string) => {
    if (city === this.weatherService.city.getValue()) return;
    this.weatherService.city.next(city);
  }
}
