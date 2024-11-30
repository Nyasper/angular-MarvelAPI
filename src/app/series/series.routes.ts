import type { Routes } from '@angular/router';
import { SeriesComponent } from './series.component';
import { SerieDetailComponent } from './serie-detail/serie-detail.component';

export const SERIES_ROUTES: Routes = [
  { path: '', component: SeriesComponent, title: 'characters' },
  { path: ':id', component: SerieDetailComponent },
];
