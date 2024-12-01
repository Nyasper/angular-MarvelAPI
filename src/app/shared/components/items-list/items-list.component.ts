import { Component, inject, input } from '@angular/core';
import { ItemComponent } from './item/item.component';
import type { ItemList } from '../../../core/models/itemsListInteface';

import { LoadingService } from '../../../core/services/loading.service';
import { PaginatorService } from '../../../core/services/paginator.service';
import { FooterComponent } from '../footer/footer.component';
import { LoadingComponent } from '../loading/loading.component';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';

@Component({
  selector: 'app-items-list',
  imports: [
    ItemComponent,
    FooterComponent,
    LoadingComponent,
    InfiniteScrollDirective,
  ],
  templateUrl: './items-list.component.html',
  styleUrl: './items-list.component.css',
})
export class ItemsListComponent {
  // private readonly route: ActivatedRoute = inject(ActivatedRoute);
  // private readonly router: Router = inject(Router);
  private readonly _loadingService: LoadingService = inject(LoadingService);
  private readonly _paginatorService: PaginatorService =
    inject(PaginatorService);

  // public readonly orderByParam: Signal<string>;
  // public readonly pageNumParam: Signal<number>;

  itemsList = input.required<ItemList[]>();
  getDataFunction = input();
  loading = this._loadingService.loading;

  onScroll() {
    console.log('ejecutando on scroll');
    // this._paginatorService.nextPage();
  }
}
