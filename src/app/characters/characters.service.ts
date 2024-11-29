import { computed, inject, Injectable, Signal } from '@angular/core';
import {
  CharactersOrderBy,
  CharactersResult,
} from '../core/models/marvelApiInterface';
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
  public getCharacterById(id: string) {
    const charaSignal = this.marvelApi.getDataById<CharactersResult>(
      'characters',
      id
    );
    return computed(() => charaSignal()?.data?.results[0]);
  }
}
