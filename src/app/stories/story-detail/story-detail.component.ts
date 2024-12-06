import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { StoriesService } from '../stories.service';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { RenderItemDetailsComponent } from '../../shared/components/render-item-details/render-item-details.component';

@Component({
  selector: 'app-story-detail',
  imports: [RenderItemDetailsComponent],
  templateUrl: './story-detail.component.html',
  styleUrl: './story-detail.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoryDetailComponent {
  public readonly storiesService: StoriesService = inject(StoriesService);
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  private readonly routeParam = toSignal(this.route.paramMap);

  public readonly currentId = computed(
    () => this.routeParam()?.get('id') ?? ''
  );
  public readonly data = this.storiesService.getStoryById(this.currentId());
}
