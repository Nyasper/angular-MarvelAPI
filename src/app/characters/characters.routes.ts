import type { Routes } from '@angular/router';
import { CharactersComponent } from './characters.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';

export const CHARACTERS_ROUTES: Routes = [
  {
    path: '',
    component: CharactersComponent,
    title: 'characters',
  },
  { path: ':id', component: CharacterDetailComponent },
];
