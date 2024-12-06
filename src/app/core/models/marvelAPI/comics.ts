import type { CharactersList } from './characters';
import type { TextObject, Image, Url } from './common';
import type { CreatorsList } from './creators';
import type { EventsList } from './events';
import type { SerieItem, SeriesList } from './series';
import type { StoriesList } from './stories';

export interface ComicsResult {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: Date;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: TextObject[];
  resourceURI: string;
  urls: Url[];
  series: SerieItem;
  variants: ComicItem[];
  collections: ComicItem[];
  collectedIssues: ComicItem[];
  dates: ComicDate[];
  prices: ComicsPrice[];
  thumbnail: Image;
  images: Image[];
  creators: CreatorsList;
  characters: CharactersList;
  stories: StoriesList;
  events: EventsList;
}

export interface ComicsList {
  available: number;
  collectionURI: string;
  items: ComicItem[];
  returned: number;
}

export interface ComicItem {
  name: string;
  resourceURI: string;
}

interface ComicDate {
  type: string;
  date: Date;
}

interface ComicsPrice {
  type: string;
  price: number;
}

export type ComicsOrderBy =
  | 'title'
  | '-title'
  | 'modified'
  | '-modified'
  | 'onsaleDate'
  | '-onsaleDate'
  | 'focDate'
  | '-focDate'
  | 'issueNumber'
  | '-issueNumber';
