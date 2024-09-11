import {
  Component,
  computed,
  effect,
  inject,
  input,
  Signal,
} from '@angular/core';
import { ItemComponent } from './item/item.component';
import type { ItemList } from '../../../core/models/itemsListInteface';

import { LoadingService } from '../../../core/services/loading.service';
import { FooterComponent } from '../footer/footer.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { LoadingComponent } from '../loading/loading.component';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

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

  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  public readonly orderByParam: Signal<string>;
  public readonly pageNumParam: Signal<number>;

  private readonly _loadingService: LoadingService = inject(LoadingService);
  loading = this._loadingService.loading;

  constructor() {
    const obs = toSignal(this.route.paramMap);
    this.orderByParam = computed(() => obs()?.get('order') ?? '');
    this.pageNumParam = this.managePageNumberParam(obs);

    effect(() => {
      console.log('El orden es:', this.orderByParam());
      console.log('El page num es:', this.pageNumParam());
    });
  }

  private managePageNumberParam(
    obs: Signal<ParamMap | undefined>
  ): Signal<number> {
    return computed(() => {
      if (
        obs() &&
        obs()?.get('page')?.length &&
        typeof Number(obs()?.get('page')) === 'number'
      ) {
        return Number(obs()?.get('page')) > 0 ? Number(obs()?.get('page')) : 1;
      }
      return 1;
    });
  }
}
