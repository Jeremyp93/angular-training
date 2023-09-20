import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { Subscription } from 'rxjs';
import { Weather } from './weather.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {

}
