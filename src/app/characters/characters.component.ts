import { Component, Signal, computed, effect, inject } from '@angular/core';
import { ItemsListComponent } from '../shared/components/items-list/items-list.component';
import { MarvelAPIService } from '../core/services/marvel-api.service';
import type { ItemList } from '../core/models/itemsListInteface';
import { ItemMapperService } from '../core/services/item-mapper.service';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [ItemsListComponent],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css',
})
export class CharactersComponent {
  private _marvelApiService: MarvelAPIService = inject(MarvelAPIService);
  private _data = this._marvelApiService.getCharacters(1);
  private _itemDataMapper: ItemMapperService = inject(ItemMapperService);

  public itemsInfo: Signal<ItemList[]> =
    this._itemDataMapper.CharactersToItemList(this._data);

  constructor() {
    effect(() => {
      console.log('el result DE CHARACTERS: ', this.itemsInfo());
    });
  }
}
