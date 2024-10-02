import type { Routes } from '@angular/router';
import { CharactersComponent } from './characters.component';
import { DetailsComponent } from '../details/details.component';

export const CHARACTERS_ROUTES: Routes = [
  {
    path: '',
    component: CharactersComponent,
    title: 'characters',
  },
  { path: ':id', component: DetailsComponent },
];
