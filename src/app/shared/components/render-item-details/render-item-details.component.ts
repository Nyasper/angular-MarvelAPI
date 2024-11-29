import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  input,
  type Signal,
} from '@angular/core';
import type {
  Characters,
  Comics,
  Series,
  Events,
} from '../../../core/models/marvelAPI/common';

@Component({
  selector: 'app-render-item-details',
  imports: [],
  templateUrl: './render-item-details.component.html',
  styleUrl: './render-item-details.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RenderItemDetailsComponent {
  public readonly data = input.required<any>();
  public readonly keysToRenderI = input<KeysToRender>({
    characters: false,
    comics: false,
    series: false,
    events: false,
    stories: false,
    creators: false,

    urls: true,
  });

  public characters: Signal<Comics> = computed(() => this.data().characters);
  public comics: Signal<Characters> = computed(() => this.data().comics);
  public series: Signal<Series> = computed(() => this.data().series);
  public events: Signal<Events> = computed(() => this.data().events);

  constructor() {
    effect(() => {
      console.log('comics:', this.comics());
    });
  }
}
interface KeysToRender {
  characters: boolean;
  comics?: boolean;
  series?: boolean;
  events?: boolean;
  stories?: boolean;
  creators?: boolean;
  urls?: boolean;
}
