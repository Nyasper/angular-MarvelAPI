import type { ComicsList } from './comics';
import type { Image } from './common';
import type { EventsList } from './events';
import type { SeriesList } from './series';
import type { StoriesList } from './stories';

export interface CreatorsResult {
  id: number;
  firstName: string;
  middleName: string;
  lastName: string;
  suffix: string;
  fullName: string;
  modified: Date;
  thumbnail: Image[];
  resourceURI: string;
  urls: URL[];
  series: SeriesList;
  stories: StoriesList;
  comics: ComicsList;
  events: EventsList;
}

export interface CreatorsList {
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

export type CreatorsOrderBy =
  | 'lastName'
  | 'firstName'
  | 'middleName'
  | 'suffix'
  | 'modified'
  | '-lastName'
  | '-firstName'
  | '-middleName'
  | '-suffix'
  | '-modified';
