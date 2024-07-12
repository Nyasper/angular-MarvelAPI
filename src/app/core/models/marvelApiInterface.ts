export type MarvelApiDatatypes = 'characters' | 'comics' | 'events' | 'series';

export interface MarvelApiCharactersInterface<
  ResultType extends MarvelApiResultTypes
> {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: Data<ResultType>;
}

interface Data<ResultType> {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: ResultType[];
}

// RESULTS
export type MarvelApiResultTypes =
  | CharactersResult
  | SeriesResult
  | ComicsResult
  | EventsResult;

export type CharactersOrderBy = 'name' | '-name' | 'modified' | '-modified';
export type SeriesOrderBy =
  | 'title'
  | '-title'
  | 'modified'
  | '-modified'
  | 'startYear'
  | '-startYear';
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
export type EventsOrderBy =
  | 'name'
  | '-name'
  | 'startDate'
  | '-startDate'
  | 'modified'
  | '-modified';

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

export interface Thumbnail {
  path: string;
  extension: string;
}

interface Comics {
  available: number;
  collectionURI: string;
  items: comicItem[];
  returned: number;
}

interface Series {
  available: number;
  collectionURI: string;
  items: serieItem[];
  returned: number;
}

interface Stories {
  available: number;
  collectionURI: string;
  items: storyItem[];
  returned: number;
}

interface comicItem {
  resourceURI: string;
  name: string;
}

interface serieItem {
  resourceURI: string;
  name: string;
}

interface storyItem {
  resourceURI: string;
  name: string;
  type: string;
}

interface Events {
  available: number;
  collectionURI: string;
  items: eventItem[];
  returned: number;
}

interface eventItem {
  resourceURI: string;
  name: string;
}

interface Url {
  type: string;
  url: string;
}

interface Characters {
  available: number;
  collectionURI: string;
  items: CharactersItems[];
  returned: number;
}

interface CharactersItems {
  resourceURI: string;
  name: string;
}

interface Creators {
  available: number;
  collectionURI: string;
  items: CreatorsItem[];
  returned: number;
}

interface CreatorsItem {
  resourceURI: string;
  name: string;
  role: string;
}

interface TextObject {
  type: string;
  language: string;
  text: string;
}

interface Variant {
  resourceURI: string;
  name: string;
}

interface Price {
  type: string;
  price: number;
}

interface NextEvents {
  resourceURI: string;
  name: string;
}

interface PreviousEvents {
  resourceURI: string;
  name: string;
}
