import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, inject } from '@angular/core';
import type {
  MarvelApiDatatypes,
  MarvelApiCharactersInterface,
  MarvelApiResultTypes,
} from '../models/marvelApiInterface';
import { Observable, catchError, finalize } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { LoadingService } from './loading.service';
import { PaginatorService } from './paginator.service';

@Injectable({
  providedIn: 'root',
})
export class MarvelAPIService {
  private readonly _http: HttpClient = inject(HttpClient);
  private readonly _loadingService: LoadingService = inject(LoadingService);
  private readonly _paginatorService: PaginatorService =
    inject(PaginatorService);

  private readonly mode: FetchMode = 'URL';

  private readonly baseUrl: string = 'https://gateway.marvel.com/v1/public';
  private readonly timeStamp: string = '2';

  private readonly publicKey: string = 'd0181bb6dbd44bd867ecacfa7c72aba7';
  private readonly hash: string = 'ab2fd2b731cba2c259ac8e2e0c3b6bdb';

  private readonly completeUrl: URL = new URL(`${this.baseUrl}/$replace`);

  private _footerContent: string = '';

  constructor() {
    // mandatory parameters
    this.completeUrl.searchParams.set('ts', this.timeStamp);
    this.completeUrl.searchParams.set('apikey', this.publicKey);
    this.completeUrl.searchParams.set('hash', this.hash);
  }

  // internal generic method for fetch data
  public getData<ResultType extends MarvelApiResultTypes>(
    dataType: MarvelApiDatatypes
  ): Signal<MarvelApiCharactersInterface<ResultType>> {
    this._loadingService.startLoading();

    // update URL with parameters
    const url: string = this.handleUrl(dataType);
    const obs: Observable<MarvelApiCharactersInterface<ResultType>> = this._http
      .get<MarvelApiCharactersInterface<ResultType>>(url)
      .pipe(
        catchError((error) => {
          console.error('Error fetching images', error);
          return [];
        }),

        finalize(() => {
          this._footerContent = result().copyright;
          this._loadingService.stopLoading();
          const { count, limit, offset, total } = result().data;
          this._paginatorService.pageInfo = {
            offset,
            pageNumber: offset / limit + 1,
            itemsPerPage: limit,
            totalItems: total,
            hasNextPage: offset + count < total,
          };
        })
      );
    const result = toSignal(obs) as Signal<
      MarvelApiCharactersInterface<ResultType>
    >;

    return result;
  }

  public getDataById<ResultType extends MarvelApiResultTypes>(
    dataType: MarvelApiDatatypes,
    id: string
  ): Signal<MarvelApiCharactersInterface<ResultType>> {
    this._loadingService.startLoading();

    const urlModified = new URL(this.completeUrl);
    urlModified.pathname = urlModified.pathname.replace('$replace', dataType);
    urlModified.pathname += `/${id}`;

    const obs: Observable<MarvelApiCharactersInterface<ResultType>> = this._http
      .get<MarvelApiCharactersInterface<ResultType>>(urlModified.href)
      .pipe(
        catchError((error) => {
          console.error('Error fetching images', error);
          return [];
        }),

        finalize(() => this._loadingService.stopLoading())
      );
    return toSignal(obs) as Signal<MarvelApiCharactersInterface<ResultType>>;
  }

  public get footerContent() {
    return this._footerContent;
  }

  private handleUrl(dataType: MarvelApiDatatypes): string {
    const { pageNumber, itemsPerPage, offset } =
      this._paginatorService.pageInfo();

    if (this.mode === 'local')
      return `data/${dataType}/page_${pageNumber}.json`;

    const urlModified = new URL(this.completeUrl);
    urlModified.pathname = urlModified.pathname.replace('$replace', dataType);

    // urlModified.searchParams.set('orderBy', order);
    urlModified.searchParams.set('limit', `${itemsPerPage}`);
    urlModified.searchParams.set('offset', `${offset}`);
    // urlModified.searchParams.set('page', `${pageNumber}`);
    // old offset ${limit * (pageNum - 1)}
    return urlModified.href;
  }
}

type FetchMode = 'URL' | 'local';
