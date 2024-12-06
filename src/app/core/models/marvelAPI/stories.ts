import type { CharactersList } from './characters';
import type { ComicItem, ComicsList } from './comics';
import type { CreatorsList } from './creators';
import type { Image } from './common';
import type { SeriesList } from './series';

export interface StoriesResult {
  id: number;
  title: string;
  description: string;
  resourceURI: string;
  type: string;
  modified: string;
  thumbnail: Image;
  comics: ComicsList;
  series: SeriesList;
  events: Event;
  characters: CharactersList;
  creators: CreatorsList;
  originalissue: ComicItem;
}

export interface StoriesList {
  available: number;
  collectionURI: string;
  items: StoryItem[];
  returned: number;
}
export interface StoryItem {
  resourceURI: string;
  name: string;
  type: string;
}

export type StoriesOrderBy = 'id' | 'modified' | '-id' | '-modified';
