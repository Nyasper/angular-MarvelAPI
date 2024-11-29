import type {
  Characters,
  Comics,
  Creators,
  NextEvents,
  PreviousEvents,
  Series,
  Stories,
  Thumbnail,
  Url,
} from './common';

export interface EventsResult {
  id: number;
  title: string;
  description: string;
  resourceURI: string;
  urls: Url[];
  modified: string;
  start?: string;
  end?: string;
  thumbnail: Thumbnail;
  creators: Creators;
  characters: Characters;
  stories: Stories;
  comics: Comics;
  series: Series;
  next?: NextEvents;
  previous?: PreviousEvents;
}

export type EventsOrderBy =
  | 'name'
  | '-name'
  | 'startDate'
  | '-startDate'
  | 'modified'
  | '-modified';
