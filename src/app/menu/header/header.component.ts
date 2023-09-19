import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isOpen: boolean = false;
  isSmallScreen: boolean = false;

  constructor() {
    this.isSmallScreen = window.innerWidth <= 768;
  }

  onToggleHamburger = () => {
    this.isOpen = !this.isOpen;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isSmallScreen = window.innerWidth <= 768;

    if (!this.isSmallScreen) {
      this.isOpen = false;
    }
  }
}
