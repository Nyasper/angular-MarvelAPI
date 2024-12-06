import type { Routes } from '@angular/router';
import { CreatorsComponent } from './creators.component';
import { CreatorDetailComponent } from './creator-detail/creator-detail.component';

export const CREATORS_ROUTES: Routes = [
  {
    path: '',
    component: CreatorsComponent,
    title: 'creators',
  },
  { path: ':id', component: CreatorDetailComponent },
];
