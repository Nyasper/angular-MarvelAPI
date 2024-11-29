import type {
  Characters,
  Comics,
  Creators,
  Events,
  Stories,
  Thumbnail,
  Url,
} from './common';

export interface SeriesResult {
  id: number;
  title: string;
  description: any;
  resourceURI: string;
  urls: Url[];
  startYear: number;
  rating: string;
  endYear: number;
  type: string;
  modified: string;
  thumbnail: Thumbnail;
  creators: Creators;
  characters: Characters;
  stories: Stories;
  comics: Comics;
  events: Events;
  next: any;
  previous: any;
}

export type SeriesOrderBy =
  | 'title'
  | '-title'
  | 'modified'
  | '-modified'
  | 'startYear'
  | '-startYear';
