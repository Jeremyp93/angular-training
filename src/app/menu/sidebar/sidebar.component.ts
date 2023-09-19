import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { MenuItem } from '../menu.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuItems: MenuItem[] = [];

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.menuItems = this.menuService.getSidebarMenu();
  }
}
