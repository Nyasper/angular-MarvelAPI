import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, computed, inject, signal } from '@angular/core';
import type {
  MarvelApiDatatypes,
  MarvelApiCharactersInterface,
  MarvelApiResultTypes,
  CharactersResult,
  SeriesResult,
  ComicsResult,
  EventsResult,
  CharactersOrderBy,
  SeriesOrderBy,
  ComicsOrderBy,
  EventsOrderBy,
} from '../models/marvelApiInterface';
import { Observable, catchError, finalize } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { LoadingService } from './loading.service';

type allOrderTypes =
  | CharactersOrderBy
  | SeriesOrderBy
  | ComicsOrderBy
  | EventsOrderBy;

@Injectable({
  providedIn: 'root',
})
export class MarvelAPIService {
  private readonly _http: HttpClient = inject(HttpClient);
  private readonly _loadingService: LoadingService = inject(LoadingService);

  private readonly perPage: number = 100; //items per page
  private readonly mode: FetchMode = 'local';

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
  private getData<ResultType extends MarvelApiResultTypes>(
    dataParams: getDataParamsInterface
  ): Signal<MarvelApiCharactersInterface<ResultType>> {
    this._loadingService.startLoading();

    // update URL with parameters
    const url: string = this.handleUrl(dataParams);
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
        })
      );
    const result = toSignal(obs) as Signal<
      MarvelApiCharactersInterface<ResultType>
    >;
    return result;
  }

  private getDataById<ResultType extends MarvelApiResultTypes>(
    dataType: MarvelApiDatatypes,
    id: number
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

  public getCharacters(
    pageNum: number = 1,
    order: CharactersOrderBy = 'name'
  ): Signal<CharactersResult[]> {
    const dataSignal = this.getData<CharactersResult>({
      dataType: 'characters',
      pageNum,
      order,
    });
    return computed(() => dataSignal()?.data?.results);
  }

  public getSeries(
    pageNum: number = 1,
    order: SeriesOrderBy = 'title'
  ): Signal<SeriesResult[]> {
    const dataSignal = this.getData<SeriesResult>({
      dataType: 'series',
      pageNum,
      order,
    });
    return computed(() => dataSignal()?.data?.results);
  }

  public getComics(
    pageNum: number = 1,
    order: ComicsOrderBy = 'title'
  ): Signal<ComicsResult[]> {
    const dataSignal = this.getData<ComicsResult>({
      dataType: 'comics',
      pageNum,
      order,
    });
    return computed(() => dataSignal()?.data?.results);
  }

  public getEvents(
    pageNum: number = 1,
    order: EventsOrderBy = 'name'
  ): Signal<EventsResult[]> {
    const dataSignal = this.getData<EventsResult>({
      dataType: 'events',
      pageNum,
      order,
    });
    return computed(() => dataSignal()?.data?.results);
  }

  public get footerContent() {
    return this._footerContent;
  }

  private handleUrl(dataParams: getDataParamsInterface): string {
    const limit = this.perPage;
    const { dataType, order, pageNum } = dataParams;

    if (this.mode === 'local') return `data/${dataType}/page_${pageNum}.json`;

    const urlModified = new URL(this.completeUrl);
    urlModified.pathname = urlModified.pathname.replace('$replace', dataType);

    urlModified.searchParams.set('orderBy', order);
    urlModified.searchParams.set('limit', `${limit}`);
    urlModified.searchParams.set('page', `${pageNum}`);
    urlModified.searchParams.set('offset', `${limit * (pageNum - 1)}`);

    return urlModified.href;
  }
}

interface getDataParamsInterface {
  dataType: MarvelApiDatatypes;
  pageNum: number;
  order: allOrderTypes;
}
type FetchMode = 'URL' | 'local';
