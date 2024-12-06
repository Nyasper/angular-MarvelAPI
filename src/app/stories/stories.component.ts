import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
} from '@angular/core';
import { ItemsListComponent } from '../shared/components/items-list/items-list.component';
import { StoriesService } from './stories.service';
import { ItemMapperService } from '../core/services/item-mapper.service';

@Component({
  selector: 'app-stories',
  imports: [ItemsListComponent],
  templateUrl: './stories.component.html',
  styleUrl: './stories.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoriesComponent {
  private storiesService: StoriesService = inject(StoriesService);
  private itemDataMapper: ItemMapperService = inject(ItemMapperService);

  private data = this.storiesService.getStories();
  public itemsInfo = this.itemDataMapper.StoriesToItemList(this.data);

  constructor() {
    effect(() => {
      console.log('Story Data:', this.data());
    });
  }
}
