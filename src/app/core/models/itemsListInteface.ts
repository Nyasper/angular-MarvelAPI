import type { Thumbnail } from './marvelAPI/common';

export interface ItemList {
  id: number;
  name: string;
  image: Thumbnail;
}
