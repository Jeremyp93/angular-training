import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component'
import { SearchComponent } from './header/search/search.component'
import { SidebarComponent } from './sidebar/sidebar.component';
import { HamburgerMenuComponent } from './header/hamburger-menu/hamburger-menu.component'
import { MenuService } from './menu.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [HeaderComponent, SidebarComponent, SearchComponent, HamburgerMenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [HeaderComponent, SidebarComponent, SearchComponent],
  providers: [MenuService]
})
export class MenuModule { }
