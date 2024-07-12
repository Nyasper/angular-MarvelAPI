import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.routes').then((m) => m.HOME_ROUTES),
  },
  {
    path: 'characters',
    loadChildren: () =>
      import('./characters/characters.routes').then((m) => m.CHARACTERS_ROUTES),
  },
  {
    path: 'series',
    loadChildren: () =>
      import('./series/series.routes').then((m) => m.SERIES_ROUTES),
  },
  {
    path: 'comics',
    loadChildren: () =>
      import('./comics/comics.routes').then((m) => m.COMICS_ROUTES),
  },
  {
    path: 'events',
    loadChildren: () =>
      import('./events/events.routes').then((m) => m.EVENTS_ROUTES),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./about/about.routes').then((m) => m.ABOUT_ROUTES),
  },
];
