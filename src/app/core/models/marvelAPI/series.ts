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
  startYear: number;
  rating: string;
  endYear: number;
  type: string;
  modified: string;
  characters: Characters;
  comics: Comics;
  events: Events;
  stories: Stories;
  creators: Creators;
  next: any;
  previous: any;
  urls: Url[];
  thumbnail: Thumbnail;
}

export type SeriesOrderBy =
  | 'title'
  | '-title'
  | 'modified'
  | '-modified'
  | 'startYear'
  | '-startYear';
