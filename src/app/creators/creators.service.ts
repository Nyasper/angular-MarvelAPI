import { computed, inject, Injectable, type Signal } from '@angular/core';
import { MarvelAPIService } from '../core/services/marvel-api.service';
import type {
  CreatorsOrderBy,
  CreatorsResult,
} from '../core/models/marvelAPI/creators';

@Injectable({
  providedIn: 'root',
})
export class CreatorsService {
  private readonly marvelApi: MarvelAPIService = inject(MarvelAPIService);

  public getCreators(
    order: CreatorsOrderBy = 'firstName'
  ): Signal<CreatorsResult[]> {
    const dataSignal = this.marvelApi.getData<CreatorsResult>('creators');
    return computed(() => dataSignal()?.data?.results);
  }
  public getCreatorById(id: string): Signal<CreatorsResult> {
    const dataSignal = this.marvelApi.getDataById<CreatorsResult>(
      'creators',
      id
    );
    return computed(() => dataSignal()?.data?.results[0]);
  }
}
