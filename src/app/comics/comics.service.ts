import { computed, inject, Injectable, type Signal } from '@angular/core';
import { MarvelAPIService } from '../core/services/marvel-api.service';
import type {
  ComicsOrderBy,
  ComicsResult,
} from '../core/models/marvelAPI/comics';

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
  public getComicById(id: string): Signal<ComicsResult> {
    const comicSignal = this.marvelApi.getDataById<ComicsResult>('comics', id);
    return computed(() => comicSignal()?.data?.results[0]);
  }
}
