import type { Routes } from '@angular/router';
import { EventsComponent } from './events.component';
import { DetailsComponent } from '../details/details.component';

export const EVENTS_ROUTES: Routes = [
  { path: '', component: EventsComponent, title: 'characters' },
  { path: ':id', component: DetailsComponent },
];
