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
  resourceURI: string;
  urls: Url[];
  series: Series;
  variants: Variant[];
  collections: any[];
  collectedIssues: any[];
  dates: Date[];
  prices: Price[];
  thumbnail: Thumbnail;
  images: Thumbnail[];
  creators: Creators;
  characters: Characters;
  stories: Stories;
  events: Events;
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
