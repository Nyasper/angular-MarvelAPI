import type { Comics, Events, Series, Stories, Thumbnail, Url } from './common';

export interface CharactersResult {
  id: number;
  name: string;
  description: string;
  modified: string;
  resourceURI: string;
  thumbnail: Thumbnail;
  comics: Comics;
  series: Series;
  events: Events;
  stories: Stories;
  urls: Url[];
}

export type CharactersOrderBy = 'name' | '-name' | 'modified' | '-modified';
