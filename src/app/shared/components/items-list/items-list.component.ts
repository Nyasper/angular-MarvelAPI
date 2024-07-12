import { Component, inject, input } from '@angular/core';
import { ItemComponent } from './item/item.component';
import type { ItemList } from '../../../core/models/itemsListInteface';

import { LoadingService } from '../../../core/services/loading.service';
import { FooterComponent } from '../footer/footer.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [
    ItemComponent,
    FooterComponent,
    LoadingComponent,
    PaginationComponent,
  ],
  templateUrl: './items-list.component.html',
  styleUrl: './items-list.component.css',
})
export class ItemsListComponent {
  itemsList = input.required<ItemList[]>();

  private readonly _loadingService: LoadingService = inject(LoadingService);
  loading = this._loadingService.loading;
}
