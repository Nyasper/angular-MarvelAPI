import type { Routes } from '@angular/router';
import { ComicsComponent } from './comics.component';
import { ComicsDetailsComponent } from './comics-details/comics-details.component';

export const COMICS_ROUTES: Routes = [
  { path: '', component: ComicsComponent, title: 'characters' },
  { path: ':id', component: ComicsDetailsComponent },
];
