import type { Routes } from '@angular/router';
import { ComicsComponent } from './comics.component';
import { ComicDetailComponent } from './comic-detail/comic-detail.component';

export const COMICS_ROUTES: Routes = [
  { path: '', component: ComicsComponent, title: 'characters' },
  { path: ':id', component: ComicDetailComponent },
];
