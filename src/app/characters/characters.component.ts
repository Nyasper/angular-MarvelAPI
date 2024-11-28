import { Component, Signal, inject } from '@angular/core';
import { ItemsListComponent } from '../shared/components/items-list/items-list.component';
import { MarvelAPIService } from '../core/services/marvel-api.service';
import type { ItemList } from '../core/models/itemsListInteface';
import { ItemMapperService } from '../core/services/item-mapper.service';
import { ActivatedRoute } from '@angular/router';
import { CharactersResult } from '../core/models/marvelApiInterface';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [ItemsListComponent],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css',
})
export class CharactersComponent {
  private _marvelApiService: MarvelAPIService = inject(MarvelAPIService);
  private _itemDataMapper: ItemMapperService = inject(ItemMapperService);

  private _data: Signal<CharactersResult[]> =
    this._marvelApiService.getCharacters();

  public itemsInfo: Signal<ItemList[]> =
    this._itemDataMapper.CharactersToItemList(this._data);
}
