import { computed, inject, Injectable, type Signal } from '@angular/core';
import { MarvelAPIService } from '../core/services/marvel-api.service';
import type {
  SeriesOrderBy,
  SeriesResult,
} from '../core/models/marvelAPI/series';

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
  public getSerieById(id: string): Signal<SeriesResult> {
    const dataSignal = this.marvelApi.getDataById<SeriesResult>('series', id);
    return computed(() => dataSignal()?.data?.results[0]);
  }
}
