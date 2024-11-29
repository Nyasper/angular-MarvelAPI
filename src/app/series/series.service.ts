import { computed, inject, Injectable, Signal } from '@angular/core';
import { MarvelAPIService } from '../core/services/marvel-api.service';
import { SeriesOrderBy, SeriesResult } from '../core/models/marvelApiInterface';

@Injectable({
  providedIn: 'root',
})
export class SeriesService {
  private readonly marvelApi: MarvelAPIService = inject(MarvelAPIService);
  public getSeries(
    pageNum: number = 1,
    order: SeriesOrderBy = 'title'
  ): Signal<SeriesResult[]> {
    const dataSignal = this.marvelApi.getData<SeriesResult>('series');
    return computed(() => dataSignal()?.data?.results);
  }
  public getSerieById(id: string) {
    const serieSignal = this.marvelApi.getDataById<SeriesResult>('series', id);
    return computed(() => serieSignal()?.data?.results[0]);
  }
}
