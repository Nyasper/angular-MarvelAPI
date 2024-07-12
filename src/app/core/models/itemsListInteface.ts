import type {
  CharactersResult,
  ComicsResult,
  EventsResult,
  SeriesResult,
  Thumbnail,
} from './marvelApiInterface';

export interface ItemList {
  id: number;
  name: string;
  image: Thumbnail;
}
/*
export function mapToItemList(result: any): ItemList {
  // Events
  if (
    result?.title &&
    (result?.start || result?.end || result?.next || result.previous)
  )
    return FromEventsResultToItemList(result as EventsResult);

  // Series
  if (result?.title && result?.rating)
    return FromSeriesResultToItemList(result as SeriesResult);

  // Comics
  if (result?.title && result?.pageCount)
    return FromComicsResultToItemList(result as ComicsResult);

  // Characters
  if (result?.name)
    return FromCharacterResultToItemList(result as CharactersResult);

  throw new Error(`Invalid Parameter "${result}" on mapToItemList()`);
}
*/
