import { Component, Signal, inject } from '@angular/core';
import type { ItemList } from '../core/models/itemsListInteface';
import { ItemMapperService } from '../core/services/item-mapper.service';
import { ItemsListComponent } from '../shared/components/items-list/items-list.component';
import { SeriesService } from './series.service';

@Component({
  selector: 'app-series',
  imports: [ItemsListComponent],
  templateUrl: './series.component.html',
  styleUrl: './series.component.css',
})
export class SeriesComponent {
  private seriesService: SeriesService = inject(SeriesService);
  private data = this.seriesService.getSeries(1);
  private itemDataMapper: ItemMapperService = inject(ItemMapperService);

  public itemsInfo: Signal<ItemList[]> = this.itemDataMapper.SeriesToItemList(
    this.data
  );
}
