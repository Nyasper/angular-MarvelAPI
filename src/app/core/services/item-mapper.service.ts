import { Injectable, Signal, computed } from '@angular/core';
import type { ItemList } from '../models/itemsListInteface';
import type {
  CharactersResult,
  SeriesResult,
  ComicsResult,
  EventsResult,
} from '../models/marvelApiInterface';

@Injectable({
  providedIn: 'root',
})
export class ItemMapperService {
  private _CharacterResultToItemList(result: CharactersResult): ItemList {
    return {
      id: result.id,
      name: result.name,
      image: result.thumbnail,
    };
  }

  private _SeriesResultToItemList(result: SeriesResult): ItemList {
    return {
      id: result.id,
      name: result.title,
      image: result.thumbnail,
    };
  }

  private _ComicsResultToItemList(result: ComicsResult): ItemList {
    return {
      id: result.id,
      name: result.title,
      image: result.thumbnail,
    };
  }

  private _EventsResultToItemList(result: EventsResult): ItemList {
    return {
      id: result.id,
      name: result.title,
      image: result.thumbnail,
    };
  }

  public CharactersToItemList(
    result: Signal<CharactersResult[]>
  ): Signal<ItemList[]> {
    return computed(() =>
      result()?.map((item) => this._CharacterResultToItemList(item))
    );
  }

  public SeriesToItemList(result: Signal<SeriesResult[]>): Signal<ItemList[]> {
    return computed(() =>
      result()?.map((item) => this._SeriesResultToItemList(item))
    );
  }

  public ComicsToItemList(result: Signal<ComicsResult[]>): Signal<ItemList[]> {
    return computed(() =>
      result()?.map((item) => this._ComicsResultToItemList(item))
    );
  }

  public EventsToItemList(result: Signal<EventsResult[]>): Signal<ItemList[]> {
    return computed(() =>
      result()?.map((item) => this._EventsResultToItemList(item))
    );
  }
}
