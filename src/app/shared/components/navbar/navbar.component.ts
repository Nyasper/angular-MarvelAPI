import { Component } from '@angular/core';
import { NavItemComponent } from './nav-item/nav-item.component';
import { MenubarModule } from 'primeng/menubar';
import type { MenuItem } from 'primeng/api';
import type { CharactersOrderBy } from '../../../core/models/marvelApiInterface';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';

@Component({
  selector: 'app-navbar',
  imports: [MenubarModule, ProgressBarComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  private readonly defaultParams = {
    page: 1,
    order: 'name',
  };

  public readonly navBarItemsData: MenuItem[] = [
    { label: 'home', routerLink: '/' },
    {
      label: 'characters',
      routerLink: 'characters',
      queryParams: this.defaultParams,
    },
    { label: 'series', routerLink: 'series', queryParams: this.defaultParams },
    { label: 'comics', routerLink: 'comics', queryParams: this.defaultParams },
    { label: 'events', routerLink: 'events', queryParams: this.defaultParams },
    { label: 'about', routerLink: 'about' },
    { label: 'otro', items: [{ label: 'subMenu1' }] },
  ];
}
