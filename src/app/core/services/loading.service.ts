import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private _loading = signal<boolean>(false);

  startLoading() {
    this._loading.set(true);
  }

  stopLoading() {
    this._loading.set(false);
  }

  public get loading() {
    return this._loading.asReadonly();
  }
}
