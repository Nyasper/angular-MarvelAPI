import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PaginatorServiceService {
  private readonly _pageData = signal<pageDataInterface>({
    currentPage: 1,
    itemsPerPage: 10,
    totalItems: 0,
  });

  get pageData() {
    return this._pageData.asReadonly();
  }

  public setCurrentPage(currentPage: number) {
    this._pageData.update((prev) => {
      return { ...prev, currentPage };
    });
  }

  public setItemsPerPage(itemsPerPage: number) {
    this._pageData.update((prev) => {
      return { ...prev, itemsPerPage };
    });
  }

  public setTotalItems(totalItems: number) {
    this._pageData.update((prev) => {
      return { ...prev, totalItems };
    });
  }
}

interface pageDataInterface {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
}
