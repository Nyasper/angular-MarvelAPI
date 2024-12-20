import { Injectable, computed, type Signal } from '@angular/core';
import type { ItemList } from '../models/itemsListInteface';
import type { CharactersResult } from '../models/marvelAPI/characters';
import type { ComicsResult } from '../models/marvelAPI/comics';
import type { SeriesResult } from '../models/marvelAPI/series';
import type { EventsResult } from '../models/marvelAPI/events';
import type { StoriesResult } from '../models/marvelAPI/stories';
import type { CreatorsResult } from '../models/marvelAPI/creators';

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
  private _StoriesResultToItemList(result: StoriesResult): ItemList {
    return {
      id: result.id,
      name: result.title,
      image: result.thumbnail,
    };
  }
  private _CreatorsResultToItemList(result: CreatorsResult): ItemList {
    return {
      id: result.id,
      name: result.fullName,
      image: result.thumbnail[0],
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
  public StoriesToItemList(
    result: Signal<StoriesResult[]>
  ): Signal<ItemList[]> {
    return computed(() =>
      result()?.map((item) => this._StoriesResultToItemList(item))
    );
  }
  public CreatorsToItemList(
    result: Signal<CreatorsResult[]>
  ): Signal<ItemList[]> {
    return computed(() =>
      result()?.map((item) => this._CreatorsResultToItemList(item))
    );
  }
}
