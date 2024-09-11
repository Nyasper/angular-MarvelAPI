import type { Routes } from '@angular/router';
import { CharactersComponent } from './characters.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';

export const CHARACTERS_ROUTES: Routes = [
  {
    path: '?order=nameDesc&page=1',
    component: CharactersComponent,
    title: 'characters',
  },
  { path: ':id', component: CharacterDetailsComponent },
];
