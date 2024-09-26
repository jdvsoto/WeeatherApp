import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WeatherService } from './services/weather.proxy.service';
import { Root } from './models/weather.model';
import { SearchComponentComponent } from './shared/ui/search-component/search-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, SearchComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [WeatherService],
})
export class AppComponent implements OnInit {
  title = 'WeatherApp';

  constructor(private weatherService: WeatherService) {}

  weatherData?: Root;

  ngOnInit(): void {
    this.weatherService.getWeather('Guatemala').subscribe({
      next: (response) => {
        this.weatherData = response;

        console.log(response);
      },
    });
  }
}
