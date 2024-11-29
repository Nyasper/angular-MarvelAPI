import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  input,
  Signal,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarvelAPIService } from '../../../core/services/marvel-api.service';
import { Comics } from '../../../core/models/marvelApiInterface';

@Component({
  selector: 'app-item-details',
  imports: [],
  templateUrl: './item-details.component.html',
  styleUrl: './item-details.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemDetailsComponent {
  public readonly data = input.required<any>();

  public readonly propToRender = input<KeysToRender>({
    characters: false,
    comics: false,
    series: false,
    events: false,
    stories: false,
    creators: false,
    urls: true,
  });

  public comics: Signal<Comics> = computed(() => this.data().comics);

  constructor() {
    effect(() => {
      console.log('series:', this.comics());
    });
  }

  private readonly allowedKeys: string[] = [
    'characters',
    'comics',
    'series',
    'events',
    'stories',
    'creators',
    'urls',
  ];
}
interface KeysToRender {
  characters?: boolean;
  comics?: boolean;
  series?: boolean;
  events?: boolean;
  stories?: boolean;
  creators?: boolean;
  urls: boolean;
}