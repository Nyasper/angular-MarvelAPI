import { Component, inject } from '@angular/core';
import { ItemsListComponent } from '../shared/components/items-list/items-list.component';
import { ItemMapperService } from '../core/services/item-mapper.service';
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

  public itemsInfo = this.itemDataMapper.EventsToItemList(this.data);
}
