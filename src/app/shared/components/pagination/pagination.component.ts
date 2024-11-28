import { Component, inject } from '@angular/core';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { PaginatorService } from '../../../core/services/paginator.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [PaginatorModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',
})
export class PaginationComponent {
  private readonly _paginator: PaginatorService = inject(PaginatorService);
  private readonly router: Router = inject(Router);

  public readonly pageInfo = this._paginator.pageInfo;

  constructor() {
    console.log(this._paginator.pageInfo());
  }
  public onPageChange($event: PaginatorState) {
    const { first, page, pageCount, rows } = $event;
    const currentUrl = this.router.url.split('?')[0];
    const queryParams = { page: page! + 1 };
    console.log({ currentUrl });

    // update paginator
    this._paginator.pageInfo = {
      pageNumber: page! + 1,
      itemsPerPage: rows!,
      offset: first!,
      totalItems: rows! * pageCount!,
      hasNextPage: page! + 1 !== pageCount,
    };

    // Re render component
    this.router
      .navigate(['/'], {
        skipLocationChange: true,
      })
      .then(() => {
        this.router.navigate([currentUrl], { queryParams });
      });
    console.log({ event: $event });
  }
}
