import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { WeatherService } from 'src/app/weather/weather.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Input() border: { width: string, style: string, color: string } | undefined;
  @ViewChild('searchInput', { static: false }) inputEl?: ElementRef<HTMLInputElement>;

  constructor(private router: Router, private weatherService: WeatherService) { }

  getBorderStyle = (): {} | undefined => {
    if (!this.border) return;
    return { 'border': `${this.border.width} ${this.border.style} ${this.border.color}` };
  }

  @HostListener('keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key !== 'Enter') return;
    const value = this.inputEl?.nativeElement.value;
    if (!value) return;
    const currentRoute = this.router.url;
    if (currentRoute === '/weather') {
      this.weatherService.city.next(value);
    }
  }
}
