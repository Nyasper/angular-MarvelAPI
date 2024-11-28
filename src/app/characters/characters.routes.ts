import type { Routes } from '@angular/router';
import { CharactersComponent } from './characters.component';
import { ItemDetailsComponent } from '../shared/components/item-details/item-details.component';

export const CHARACTERS_ROUTES: Routes = [
  {
    path: '',
    component: CharactersComponent,
    title: 'characters',
  },
  { path: ':id', component: ItemDetailsComponent },
];
