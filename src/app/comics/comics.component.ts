import { Component, Signal, inject } from '@angular/core';
import { ItemsListComponent } from '../shared/components/items-list/items-list.component';
import { MarvelAPIService } from '../core/services/marvel-api.service';
import { ItemMapperService } from '../core/services/item-mapper.service';
import type { ItemList } from '../core/models/itemsListInteface';

@Component({
  selector: 'app-comics',
  standalone: true,
  imports: [ItemsListComponent],
  templateUrl: './comics.component.html',
  styleUrl: './comics.component.css',
})
export class ComicsComponent {
  private _marvelApiService: MarvelAPIService = inject(MarvelAPIService);
  private _data = this._marvelApiService.getComics(1);
  private _itemDataMapper: ItemMapperService = inject(ItemMapperService);

  public itemsInfo: Signal<ItemList[]> = this._itemDataMapper.ComicsToItemList(
    this._data
  );
}
