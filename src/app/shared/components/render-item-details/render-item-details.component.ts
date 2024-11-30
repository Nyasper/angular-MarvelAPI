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
  Url,
  Thumbnail,
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

  private readonly defaultProps: PropsToRender = {
    thumbnail: true,
    urls: true,

    characters: true,
    comics: true,
    series: true,
    events: true,

    stories: true,
    creators: true,
  };
  public propsToRender = input<PropsToRender, Partial<PropsToRender>>(
    this.defaultProps,
    {
      transform: (value: Partial<PropsToRender>): PropsToRender => {
        return {
          ...this.defaultProps,
          ...value,
        };
      },
    }
  );

  public imageSrc: Signal<string | null> = computed(() => {
    const thumbnailData: Thumbnail | null = this.propsToRender().urls
      ? this.data()?.thumbnail ?? null
      : null;
    if (!thumbnailData) return null;
    return `${thumbnailData?.path}.${thumbnailData?.extension}`;
  });
  public urls: Signal<Url[] | null> = computed(() =>
    this.propsToRender().urls ? this.data()?.urls ?? null : null
  );

  public characters: Signal<Characters | null> = computed(() =>
    this.propsToRender().comics ? this.data()?.comics ?? null : null
  );
  public comics: Signal<Comics | null> = computed(() =>
    this.propsToRender().characters ? this.data()?.characters : null
  );
  public series: Signal<Series | null> = computed(() =>
    this.propsToRender().series ? this.data()?.series ?? null : null
  );
  public events: Signal<Events | null> = computed(() =>
    this.propsToRender().events ? this.data()?.events ?? null : null
  );
  public stories: Signal<Events | null> = computed(() =>
    this.propsToRender().stories ? this.data()?.stories ?? null : null
  );
  public creators: Signal<Events | null> = computed(() =>
    this.propsToRender().creators ? this.data()?.creators ?? null : null
  );

  constructor() {
    effect(() => {
      // console.log('props to render:', this.propsToRender());
    });
  }
}
interface PropsToRender {
  thumbnail: boolean;
  urls: boolean;
  characters: boolean;
  comics: boolean;
  series: boolean;
  events: boolean;
  stories: boolean;
  creators: boolean;
}
