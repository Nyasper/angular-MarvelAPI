import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  input,
  Signal,
} from '@angular/core';
import {
  Characters,
  Comics,
  Creators,
  Series,
} from '../../../core/models/marvelApiInterface';

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
  characters: boolean;
  comics?: boolean;
  series?: boolean;
  events?: boolean;
}
