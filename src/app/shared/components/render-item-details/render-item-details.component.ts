import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  input,
  type Signal,
} from '@angular/core';
import { RenderCategoryComponent } from './render-category/render-category.component';
import type { CharactersList } from '../../../core/models/marvelAPI/characters';
import type { ComicsList } from '../../../core/models/marvelAPI/comics';
import type { Url } from '../../../core/models/marvelAPI/common';
import type {
  CreatorsList,
  CreatorsItem,
} from '../../../core/models/marvelAPI/creators';
import type { EventsList } from '../../../core/models/marvelAPI/events';
import type { SeriesList } from '../../../core/models/marvelAPI/series';
import type {
  StoriesList,
  StoryItem,
} from '../../../core/models/marvelAPI/stories';

@Component({
  selector: 'app-render-item-details',
  imports: [RenderCategoryComponent],
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
    if (!this.propsToRender().thumbnail) return null;
    return this.data().thumbnail ?? null;
  });
  public urls: Signal<Url[] | null> = computed(() => {
    if (!this.propsToRender().urls) return null;
    return this.data().urls ?? null;
  });

  public characters: Signal<CharactersList | null> = computed(() => {
    if (!this.propsToRender().characters) return null;

    const charas: CharactersList | undefined = this.data().characters ?? null;
    if (!charas) return null;
    charas.items = this.replaceItemWithUrl('characters', charas);

    return charas;
  });

  public comics: Signal<ComicsList | null> = computed(() => {
    if (!this.propsToRender().comics) return null;

    const comics: ComicsList | undefined = this.data().comics;
    if (!comics) return null;
    comics.items = this.replaceItemWithUrl('comics', comics);

    return comics;
  });
  public series: Signal<SeriesList | null> = computed(() => {
    if (!this.propsToRender().series) return null;

    const series: SeriesList | undefined = this.data().series;
    if (!series) return null;
    series.items = this.replaceItemWithUrl('series', series);
    return series;
  });
  public events: Signal<EventsList | null> = computed(() => {
    if (!this.propsToRender().events) return null;

    const events: EventsList | undefined = this.data().events;
    if (!events) return null;
    events.items = this.replaceItemWithUrl('events', events);
    return events;
  });
  public stories: Signal<StoriesList | null> = computed(() => {
    if (!this.propsToRender().stories) return null;
    const stories: StoriesList | undefined = this.data().stories;
    if (!stories) return null;
    stories.items = this.replaceItemWithUrl('stories', stories) as StoryItem[];
    return stories;
  });
  public creators: Signal<CreatorsList | null> = computed(() => {
    if (!this.propsToRender().creators) return null;
    const creators: CreatorsList | undefined = this.data().creators;
    if (!creators) return null;
    creators.items = this.replaceItemWithUrl(
      'creators',
      creators
    ) as CreatorsItem[];
    return creators;
  });

  public getResourceId(url: string): string {
    const index: number = url.lastIndexOf('/') + 1;
    return url.substring(index);
  }

  public replaceItemWithUrl(
    baseUrl: string,
    data:
      | CharactersList
      | ComicsList
      | SeriesList
      | EventsList
      | StoriesList
      | CreatorsList
  ) {
    return data.items.map(({ name, resourceURI, ...rest }) => ({
      ...rest,
      name,
      resourceURI: `/${baseUrl}/${this.getResourceId(resourceURI)}`,
    }));
  }

  constructor() {
    effect(() => {
      console.log({
        characters: this.characters(),
        comics: this.comics(),
        series: this.series(),
        events: this.events(),
        stories: this.stories(),
        creators: this.creators(),
      });
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
type OnlyItemsProps = Omit<PropsToRender, 'urls' | 'thumbnail'>;
