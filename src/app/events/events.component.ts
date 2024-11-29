import { Component, Signal, inject } from '@angular/core';
import { ItemsListComponent } from '../shared/components/items-list/items-list.component';
import { ItemMapperService } from '../core/services/item-mapper.service';
import { ItemList } from '../core/models/itemsListInteface';
import { EventsService } from './events.service';

@Component({
  selector: 'app-events',
  imports: [ItemsListComponent],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css',
})
export class EventsComponent {
  private eventsService: EventsService = inject(EventsService);
  private data = this.eventsService.getEvents(1);
  private itemDataMapper: ItemMapperService = inject(ItemMapperService);

  public itemsInfo: Signal<ItemList[]> = this.itemDataMapper.EventsToItemList(
    this.data
  );
}
