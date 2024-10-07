import {
  Component,
  Signal,
  WritableSignal,
  effect,
  inject,
  signal,
} from '@angular/core';
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
  private readonly route: ActivatedRoute = inject(ActivatedRoute);

  private routeParamSignal = toSignal(this.route.queryParams);
  private readonly initialPageNum = this.routeParamSignal()!['page'] ?? '1';
  private _data: Signal<CharactersResult[]> =
    this._marvelApiService.getCharacters(this.initialPageNum);

  public itemsInfo: Signal<ItemList[]> =
    this._itemDataMapper.CharactersToItemList(this._data);

  // public sendData(pageNumber: number) {
  //   return this._marvelApiService.getCharacters(pageNumber);
  // }

  onScroll() {
    // const page2 = this._marvelApiService.getCharacters(2);
    console.log('llego desde el generico el numPage:');
  }

  constructor() {
    effect(
      () => {
        const pageNum: string = this.routeParamSignal()!['page'] ?? '1';
        console.log({ pageNum });
      },
      { allowSignalWrites: true }
    );
  }
}
