import { Component, Signal, inject } from '@angular/core';
import { ItemsListComponent } from '../shared/components/items-list/items-list.component';
import { MarvelAPIService } from '../core/services/marvel-api.service';
import { ItemMapperService } from '../core/services/item-mapper.service';
import { ItemList } from '../core/models/itemsListInteface';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [ItemsListComponent],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css',
})
export class EventsComponent {
  private _marvelApiService: MarvelAPIService = inject(MarvelAPIService);
  private _data = this._marvelApiService.getEvents(1);
  private _itemDataMapper: ItemMapperService = inject(ItemMapperService);

  public itemsInfo: Signal<ItemList[]> = this._itemDataMapper.EventsToItemList(
    this._data
  );
}
