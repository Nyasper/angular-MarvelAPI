import type { Routes } from '@angular/router';
import { SeriesComponent } from './series.component';
import { SeriesDetailsComponent } from './series-details/series-details.component';

export const SERIES_ROUTES: Routes = [
  { path: '', component: SeriesComponent, title: 'characters' },
  { path: ':id', component: SeriesDetailsComponent },
];
