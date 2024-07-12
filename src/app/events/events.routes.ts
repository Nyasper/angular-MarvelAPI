import type { Routes } from '@angular/router';
import { EventsComponent } from './events.component';
import { EventsDetailsComponent } from './events-details/events-details.component';

export const EVENTS_ROUTES: Routes = [
  { path: '', component: EventsComponent, title: 'characters' },
  { path: ':id', component: EventsDetailsComponent },
];
