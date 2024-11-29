import type { Comics, Events, Series, Stories, Thumbnail, Url } from './common';

export interface CharactersResult {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: Thumbnail;
  resourceURI: string;
  comics: Comics;
  series: Series;
  stories: Stories;
  events: Events;
  urls: Url[];
}

export type CharactersOrderBy = 'name' | '-name' | 'modified' | '-modified';
