import { computed, inject, Injectable, type Signal } from '@angular/core';
import type {
  StoriesOrderBy,
  StoriesResult,
} from '../core/models/marvelAPI/stories';
import { MarvelAPIService } from '../core/services/marvel-api.service';

@Injectable({
  providedIn: 'root',
})
export class StoriesService {
  private readonly marvelApi: MarvelAPIService = inject(MarvelAPIService);

  public getStories(order: StoriesOrderBy = 'id'): Signal<StoriesResult[]> {
    const dataSignal = this.marvelApi.getData<StoriesResult>('stories');
    return computed(() => dataSignal()?.data?.results);
  }
  public getStoryById(id: string): Signal<StoriesResult> {
    const dataSignal = this.marvelApi.getDataById<StoriesResult>('stories', id);
    return computed(() => dataSignal()?.data?.results[0]);
  }
}
