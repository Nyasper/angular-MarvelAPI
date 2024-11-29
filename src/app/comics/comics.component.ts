import { Component, Signal, inject } from '@angular/core';
import { ItemsListComponent } from '../shared/components/items-list/items-list.component';
import { ItemMapperService } from '../core/services/item-mapper.service';
import type { ItemList } from '../core/models/itemsListInteface';
import { ComicsService } from './comics.service';

@Component({
  selector: 'app-comics',
  imports: [ItemsListComponent],
  templateUrl: './comics.component.html',
  styleUrl: './comics.component.css',
})
export class ComicsComponent {
  private comicsService: ComicsService = inject(ComicsService);
  private data = this.comicsService.getComics(1);
  private itemDataMapper: ItemMapperService = inject(ItemMapperService);

  public itemsInfo: Signal<ItemList[]> = this.itemDataMapper.ComicsToItemList(
    this.data
  );
}
