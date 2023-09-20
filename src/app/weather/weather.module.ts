import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather.component';
import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherItemComponent } from './weather-item/weather-item.component';
import { HistoryComponent } from './history/history.component';



@NgModule({
  declarations: [WeatherComponent, WeatherItemComponent, HistoryComponent],
  imports: [
    CommonModule,
    WeatherRoutingModule
  ],
  exports: []
})
export class WeatherModule { }
