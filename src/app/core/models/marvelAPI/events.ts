import type { CharactersList } from './characters';
import type { ComicsList } from './comics';
import type { Image, Url } from './common';
import type { CreatorsList } from './creators';
import type { SeriesList } from './series';
import type { StoriesList } from './stories';

export interface EventsResult {
  id: number;
  title: string;
  description: string;
  resourceURI: string;
  urls: Url[];
  modified: string;
  start?: Date;
  end?: Date;
  thumbnail: Image;
  comics: ComicsList;
  stories: StoriesList;
  series: SeriesList;
  characters: CharactersList;
  creators: CreatorsList;
  next?: EventItem;
  previous?: EventItem;
}

export interface EventsList {
  available: number;
  collectionURI: string;
  items: EventItem[];
  returned: number;
}

export interface EventItem {
  resourceURI: string;
  name: string;
}

export type EventsOrderBy =
  | 'name'
  | '-name'
  | 'startDate'
  | '-startDate'
  | 'modified'
  | '-modified';
