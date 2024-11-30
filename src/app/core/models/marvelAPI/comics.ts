import type {
  Characters,
  Creators,
  Events,
  Price,
  Series,
  Stories,
  TextObject,
  Thumbnail,
  Url,
  Variant,
} from './common';

export interface ComicsResult {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: string;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: TextObject[];
  characters: Characters;
  series: Series;
  events: Events;
  stories: Stories;
  creators: Creators;
  resourceURI: string;
  variants: Variant[];
  collections: any[];
  collectedIssues: any[];
  dates: Date[];
  prices: Price[];
  thumbnail: Thumbnail;
  images: Thumbnail[];
  urls: Url[];
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
