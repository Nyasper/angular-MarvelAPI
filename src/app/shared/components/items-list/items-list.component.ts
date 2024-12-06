import {
  Component,
  computed,
  effect,
  EventEmitter,
  inject,
  input,
  signal,
} from '@angular/core';
import { ItemComponent } from './item/item.component';
import type { ItemList } from '../../../core/models/itemsListInteface';

import { LoadingService } from '../../../core/services/loading.service';
import { PaginatorService } from '../../../core/services/paginator.service';
import { FooterComponent } from '../footer/footer.component';
import { LoadingComponent } from '../loading/loading.component';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-items-list',
  imports: [
    ItemComponent,
    FooterComponent,
    LoadingComponent,
    InfiniteScrollDirective,
    SearchBarComponent,
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

  public itemsList = input.required<ItemList[]>();
  public searchValue = signal<string>('');

  public handleOutput(e: string): void {
    this.searchValue.set(e);
  }

  public filteredData = computed(() =>
    this.itemsList()?.filter((item) =>
      item.name.toLowerCase().includes(this.searchValue().toLowerCase())
    )
  );

  public getDataFunction = input();
  public loading = this._loadingService.loading;

  onScroll() {
    console.log('ejecutando on scroll');
    // this._paginatorService.nextPage();
  }
}
