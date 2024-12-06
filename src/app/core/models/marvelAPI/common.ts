import type { CharactersList, CharactersResult } from './characters';
import type { ComicsList, ComicsResult } from './comics';
import type { CreatorsList, CreatorsResult } from './creators';
import type { EventsList, EventsResult } from './events';
import type { SeriesList, SeriesResult } from './series';
import type { StoriesList, StoriesResult } from './stories';

export interface MarvelApiDataWrapper<ResultType extends ResultsTypes> {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: DataContainer<ResultType>;
}

interface DataContainer<ResultType> {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: ResultType[];
}

// RESULTS
export type ResultsName =
  | 'characters'
  | 'comics'
  | 'series'
  | 'events'
  | 'stories'
  | 'creators';

export type ResultsTypes =
  | CharactersResult
  | ComicsResult
  | SeriesResult
  | EventsResult
  | StoriesResult
  | CreatorsResult;

export type ItemsListsTypes =
  | CharactersList
  | ComicsList
  | SeriesList
  | EventsList
  | StoriesList
  | CreatorsList;

export interface Image {
  path: string;
  extension: string;
}
export interface Url {
  type: string;
  url: string;
}

export interface TextObject {
  type: string;
  language: string;
  text: string;
}
