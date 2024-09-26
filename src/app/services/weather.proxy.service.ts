import { Injectable } from '@angular/core';
import { BaseHttpService } from '../shared/data-access/base-http.service';
import { Root } from '../models/weather.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class WeatherService extends BaseHttpService {
  getWeather(cityName: string): Observable<Root> {
    return this.http.get<Root>(
      `${this.apiUrl}?q=${cityName}&appid=${this.apiKey}&units=metric`
    );
  }
}