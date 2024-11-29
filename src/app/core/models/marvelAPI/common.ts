import type { CharactersResult } from './characters';
import type { ComicsResult } from './comics';
import type { EventsResult } from './events';
import type { SeriesResult } from './series';

export interface MarvelApiCharactersInterface<
  // restrict
  ResultType extends MarvelApiResultTypes
> {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: Data<ResultType>;
}

interface Data<ResultType> {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: ResultType[];
}

// RESULTS
export type MarvelApiResultsType =
  | 'characters'
  | 'comics'
  | 'events'
  | 'series';
export type MarvelApiResultTypes =
  | CharactersResult
  | SeriesResult
  | ComicsResult
  | EventsResult;

export interface Thumbnail {
  path: string;
  extension: string;
}

export interface Comics {
  available: number;
  collectionURI: string;
  items: comicItem[];
  returned: number;
}

export interface Series {
  available: number;
  collectionURI: string;
  items: serieItem[];
  returned: number;
}

export interface Stories {
  available: number;
  collectionURI: string;
  items: storyItem[];
  returned: number;
}
export interface Events {
  available: number;
  collectionURI: string;
  items: eventItem[];
  returned: number;
}

export interface comicItem {
  resourceURI: string;
  name: string;
}

export interface serieItem {
  resourceURI: string;
  name: string;
}

export interface storyItem {
  resourceURI: string;
  name: string;
  type: string;
}

export interface eventItem {
  resourceURI: string;
  name: string;
}

export interface Url {
  type: string;
  url: string;
}

export interface Characters {
  available: number;
  collectionURI: string;
  items: CharactersItems[];
  returned: number;
}

export interface CharactersItems {
  resourceURI: string;
  name: string;
}

export interface Creators {
  available: number;
  collectionURI: string;
  items: CreatorsItem[];
  returned: number;
}

export interface CreatorsItem {
  resourceURI: string;
  name: string;
  role: string;
}

export interface TextObject {
  type: string;
  language: string;
  text: string;
}

export interface Variant {
  resourceURI: string;
  name: string;
}

export interface Price {
  type: string;
  price: number;
}

export interface NextEvents {
  resourceURI: string;
  name: string;
}

export interface PreviousEvents {
  resourceURI: string;
  name: string;
}
