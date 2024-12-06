import type { CharactersList } from './characters';
import type { ComicsList } from './comics';
import type { Image, Url } from './common';
import type { CreatorsList } from './creators';
import type { EventsList } from './events';
import type { StoriesList } from './stories';

export interface SeriesResult {
  id: number;
  title: string;
  description: any;
  resourceURI: string;
  urls: Url[];
  startYear: number;
  endYear: number;
  rating: string;
  modified: Date;
  thumbnail: Image;
  type: string;
  comics: ComicsList;
  stories: StoriesList;
  events: EventsList;
  characters: CharactersList;
  creators: CreatorsList;
  next?: SerieItem;
  previous?: SerieItem;
}

export interface SeriesList {
  available: number;
  collectionURI: string;
  items: SerieItem[];
  returned: number;
}

export interface SerieItem {
  resourceURI: string;
  name: string;
}

export type SeriesOrderBy =
  | 'title'
  | '-title'
  | 'modified'
  | '-modified'
  | 'startYear'
  | '-startYear';
