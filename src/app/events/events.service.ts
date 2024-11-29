import { computed, inject, Injectable, type Signal } from '@angular/core';
import { MarvelAPIService } from '../core/services/marvel-api.service';
import type {
  EventsOrderBy,
  EventsResult,
} from '../core/models/marvelAPI/events';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  private readonly marvelApi: MarvelAPIService = inject(MarvelAPIService);

  public getEvents(
    pageNum: number = 1,
    order: EventsOrderBy = 'name'
  ): Signal<EventsResult[]> {
    const dataSignal = this.marvelApi.getData<EventsResult>('events');
    return computed(() => dataSignal()?.data?.results);
  }
  public getEventById(id: string): Signal<EventsResult> {
    const eventSignal = this.marvelApi.getDataById<EventsResult>('events', id);
    return computed(() => eventSignal()?.data?.results[0]);
  }
}
