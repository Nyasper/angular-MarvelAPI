import { Component, Signal, inject } from '@angular/core';
import { MarvelAPIService } from '../core/services/marvel-api.service';
import type { ItemList } from '../core/models/itemsListInteface';
import { ItemMapperService } from '../core/services/item-mapper.service';
import { ItemsListComponent } from '../shared/components/items-list/items-list.component';

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [ItemsListComponent],
  templateUrl: './series.component.html',
  styleUrl: './series.component.css',
})
export class SeriesComponent {
  private _marvelApiService: MarvelAPIService = inject(MarvelAPIService);
  private _data = this._marvelApiService.getSeries(1);
  private _itemDataMapper: ItemMapperService = inject(ItemMapperService);

  public itemsInfo: Signal<ItemList[]> = this._itemDataMapper.SeriesToItemList(
    this._data
  );
}
