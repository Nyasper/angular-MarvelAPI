import { computed, inject, Injectable, type Signal } from '@angular/core';
import type {
  CharactersOrderBy,
  CharactersResult,
} from '../core/models/marvelAPI/characters';
import { MarvelAPIService } from '../core/services/marvel-api.service';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private readonly marvelApi: MarvelAPIService = inject(MarvelAPIService);

  public getCharacters(
    order: CharactersOrderBy = 'name'
  ): Signal<CharactersResult[]> {
    const dataSignal = this.marvelApi.getData<CharactersResult>('characters');
    return computed(() => dataSignal()?.data?.results);
  }
  public getCharacterById(id: string): Signal<CharactersResult> {
    const charaSignal = this.marvelApi.getDataById<CharactersResult>(
      'characters',
      id
    );
    return computed(() => charaSignal()?.data?.results[0]);
  }
}
