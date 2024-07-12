import { Component } from '@angular/core';
import type { NavBarItemsInterface } from '../../../core/models/navbarItemsInterface';
import { NavItemComponent } from './nav-item/nav-item.component';
import { MenubarModule } from 'primeng/menubar';
import type { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NavItemComponent, MenubarModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  public navBarItemsData: MenuItem[] = [
    { label: 'home', routerLink: '/' },
    {
      label: 'characters',
      items: [
        {
          label: 'byName',
          routerLink: 'characters',
        },
      ],
    },
    { label: 'series', routerLink: 'series' },
    { label: 'comics', routerLink: 'comics' },
    { label: 'events', routerLink: 'events' },
    { label: 'about', routerLink: 'about' },
    { label: 'otro', items: [{ label: 'subMenu1' }] },
    // { name: 'characters', path: 'characters' },
    // { name: 'about', path: 'about' },
  ];
}
