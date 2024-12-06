import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
} from '@angular/core';
import { CreatorsService } from './creators.service';
import { ItemMapperService } from '../core/services/item-mapper.service';
import { ItemsListComponent } from '../shared/components/items-list/items-list.component';

@Component({
  selector: 'app-creators',
  imports: [ItemsListComponent],
  templateUrl: './creators.component.html',
  styleUrl: './creators.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreatorsComponent {
  private creatorsService: CreatorsService = inject(CreatorsService);
  private itemDataMapper: ItemMapperService = inject(ItemMapperService);

  private data = this.creatorsService.getCreators();
  public itemsData = this.itemDataMapper.CreatorsToItemList(this.data);

  constructor() {
    effect(() => {
      console.log('Creators Data:', this.data());
    });
  }
}
