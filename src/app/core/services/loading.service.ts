import { effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private _loading = signal<boolean>(false);
  private _progress = signal<number>(0);

  constructor() {
    effect(() => console.log(`loading: ${this._progress()}%`));
  }
  public get progress() {
    return this._progress.asReadonly();
  }

  public startLoading() {
    this._loading.set(true);
    this.simulateProgress();
  }

  public stopLoading() {
    this._loading.set(false);
    this._progress.set(100);
    setTimeout(() => this._progress.set(0), 1000); // Reset
  }

  private simulateProgress() {
    this._progress.set(20);
    const interval = setInterval(() => {
      if (this._progress() < 90) {
        this._progress.update((oldProgress) => oldProgress + 10);
      } else {
        clearInterval(interval);
      }
    }, 400);
  }

  public get loading() {
    return this._loading.asReadonly();
  }
}
