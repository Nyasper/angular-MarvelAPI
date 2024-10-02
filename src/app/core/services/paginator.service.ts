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

@Injectable({
  providedIn: 'root',
})
export class PaginatorService {
  private _pageNumberState = signal<number>(1);
  private readonly orderByParam: string = '';
  private readonly pageNumParam: number = 1;

  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  private readonly router: Router = inject(Router);

  constructor() {
    // url param
    const queryParamsSignal = toSignal(this.route.queryParams);
    this.orderByParam = queryParamsSignal()?.['order'] ?? 'name';

    this.pageNumParam = this.managePageNumberParam(queryParamsSignal);
    this._pageNumberState.set(this.pageNumParam);

    effect(() => {
      this.updateUrlParam();
    });
  }

  public nextPage() {
    this._pageNumberState.update((page) => page + 1);
  }

  public previousPage() {
    this._pageNumberState.update((page) => page - 1);
  }

  public set pageNumberState(value: number) {
    this._pageNumberState.set(value);
  }

  public get pageNumberState(): Signal<number> {
    return this._pageNumberState.asReadonly();
  }

  private updateUrlParam(): void {
    this.router.navigate([], {
      relativeTo: this.route, // Mantiene la ruta actual
      queryParamsHandling: 'merge', // no reemplaza los demas parametros
      queryParams: {
        page: this._pageNumberState(),
      },
    });
  }

  private managePageNumberParam(
    queryParamsSignal: Signal<Params | undefined>
  ): number {
    const pageParam: string = queryParamsSignal()?.['page'] ?? '1';

    const pageNumber = Number(pageParam);
    return !isNaN(pageNumber) && pageNumber > 0 ? pageNumber : 1;
  }
}
