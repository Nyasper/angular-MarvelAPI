import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  input,
  type Signal,
} from '@angular/core';
import type { ComicsList } from '../../../core/models/marvelAPI/comics';

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

  public comics: Signal<ComicsList> = computed(() => this.data().comics);

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
