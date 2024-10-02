import type { Routes } from '@angular/router';
import { SeriesComponent } from './series.component';
import { DetailsComponent } from '../details/details.component';

export const SERIES_ROUTES: Routes = [
  { path: '', component: SeriesComponent, title: 'characters' },
  { path: ':id', component: DetailsComponent },
];
