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
  modified: string;
  start?: string;
  end?: string;
  characters: Characters;
  comics: Comics;
  series: Series;
  stories: Stories;
  creators: Creators;
  next?: NextEvents;
  previous?: PreviousEvents;
  thumbnail: Thumbnail;
  urls: Url[];
}

export type EventsOrderBy =
  | 'name'
  | '-name'
  | 'startDate'
  | '-startDate'
  | 'modified'
  | '-modified';
