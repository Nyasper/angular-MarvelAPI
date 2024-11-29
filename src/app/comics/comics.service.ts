import { computed, inject, Injectable, Signal } from '@angular/core';
import { MarvelAPIService } from '../core/services/marvel-api.service';
import { ComicsOrderBy, ComicsResult } from '../core/models/marvelApiInterface';

@Injectable({
  providedIn: 'root',
})
export class ComicsService {
  private readonly marvelApi: MarvelAPIService = inject(MarvelAPIService);

  public getComics(
    pageNum: number = 1,
    order: ComicsOrderBy = 'title'
  ): Signal<ComicsResult[]> {
    const dataSignal = this.marvelApi.getData<ComicsResult>('comics');
    return computed(() => dataSignal()?.data?.results);
  }
  public getComicById(id: string) {
    const comicSignal = this.marvelApi.getDataById<ComicsResult>('comics', id);
    return computed(() => comicSignal()?.data?.results[0]);
  }
}
