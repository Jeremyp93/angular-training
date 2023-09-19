import { Component, OnInit } from '@angular/core';

import { MenuItem } from '../../menu.model';
import { MenuService } from '../../menu.service';

@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.scss']
})
export class HamburgerMenuComponent implements OnInit {
  menuItems: MenuItem[] = [];

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.menuItems = this.menuService.getHamburgerMenu();
    const loginMenuItem = this.menuItems.find(m => m.name === 'Login');
    if (!loginMenuItem) return;
    loginMenuItem.properties = { highlight: true };
  }
}
