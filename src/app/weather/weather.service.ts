import { Injectable, Signal, signal } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment as config } from "src/environments/environment";
import { BehaviorSubject, Observable, Subject, map, tap } from "rxjs";
import { Weather } from "./weather.model";

@Injectable({ providedIn: 'root' })
export class WeatherService {
    public city: BehaviorSubject<string> = new BehaviorSubject<string>('Montreal');
    previousCities = signal<string[]>([]);

    constructor(private httpClient: HttpClient) { }

    public getNow = (city: string): Observable<Weather> => {
        // Initialize Params Object
        let params = new HttpParams();
        params = params.append('unitGroup', 'metric');
        params = params.append('contentType', 'json');
        params = params.append('inlclude', 'current');
        params = params.append('key', config.weather.apiKey);

        return this.httpClient.get(`${config.weather.baseUrl}${city}`, { params: params })
            .pipe(map((response: any) => {
                const weather = new Weather();
                weather.location = response.resolvedAddress;
                weather.timezone = response.timezone;
                weather.temperature = response.currentConditions.temp;
                weather.feelsLike = response.currentConditions.feelslike;
                weather.precipitationProbability = response.currentConditions.precipprob;
                weather.windSpeed = response.currentConditions.windspeed;
                weather.description = response.currentConditions.conditions;
                weather.icon = response.currentConditions.icon;
                return weather;
            }), tap((weather: Weather) => {
                if (this.previousCities().indexOf(weather.location) !== -1) {
                    return
                }
                if (this.previousCities().length === 3) {
                    this.previousCities.mutate(arr => arr.splice(0, 1));
                }
                this.previousCities.mutate(arr => arr.push(weather.location));
            }));
    }
}