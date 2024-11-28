import {
  computed,
  effect,
  inject,
  Injectable,
  Signal,
  signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Params, Router } from '@angular/router';
import type { PageInfo } from '../models/pageInfo.interface';

@Injectable({
  providedIn: 'root',
})
export class PaginatorService {
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  private readonly router: Router = inject(Router);

  private readonly queryParams = toSignal(this.route.queryParams); //query params signal

  private readonly _pageInfo = signal<PageInfo>({
    pageNumber: this.pageNumberParamHandler(),
    totalItems: 0,
    itemsPerPage: 20,
    offset: 0,
    hasNextPage: true,
  });

  public get pageInfo(): Signal<PageInfo> {
    return this._pageInfo.asReadonly();
  }
  public set pageInfo(value: PageInfo) {
    console.log('estableciendo', value.pageNumber);
    this._pageInfo.set(value);
  }

  public updateUrlParam(page: string): void {
    this.router.navigate([], {
      relativeTo: this.route, // Mantiene la ruta actual
      queryParamsHandling: 'merge', // no reemplaza los demas parametros
      queryParams: {
        page,
      },
    });
  }

  public navigateTo(url: string) {
    this.router.navigateByUrl('/characters?page=222');
  }

  private pageNumberParamHandler(): number {
    const pageParam: string = this.queryParams()?.['page'] ?? '1';

    const pageNumber: number = Number(pageParam);
    const isValidPageParam: boolean = !isNaN(pageNumber) && pageNumber > 0;
    if (!isValidPageParam) this.updateUrlParam('1');

    return isValidPageParam ? pageNumber : 1;
  }
}
