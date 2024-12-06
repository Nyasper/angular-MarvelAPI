import type { ComicsList } from './comics';
import type { Image, Url } from './common';
import type { EventsList } from './events';
import type { SeriesList } from './series';
import type { StoriesList } from './stories';

export interface CharactersResult {
  id: number;
  name: string;
  description: string;
  modified: string;
  resourceURI: string;
  urls: Url[];
  thumbnail: Image;
  comics: ComicsList;
  stories: StoriesList;
  events: EventsList;
  series: SeriesList;
}

export interface CharactersList {
  available: number;
  collectionURI: string;
  items: CharactersItems[];
  returned: number;
}

export interface CharactersItems {
  resourceURI: string;
  name: string;
}

export type CharactersOrderBy = 'name' | '-name' | 'modified' | '-modified';
