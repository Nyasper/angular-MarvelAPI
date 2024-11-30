import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { ComicsService } from '../comics.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { RenderItemDetailsComponent } from '../../shared/components/render-item-details/render-item-details.component';

@Component({
  selector: 'app-comic-detail',
  imports: [RenderItemDetailsComponent],
  templateUrl: './comic-detail.component.html',
  styleUrl: './comic-detail.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComicDetailComponent {
  public readonly comicsService: ComicsService = inject(ComicsService);
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  private readonly routeParam = toSignal(this.route.paramMap);

  public readonly currentId = computed(
    () => this.routeParam()?.get('id') ?? ''
  );
  public readonly data = this.comicsService.getComicById(this.currentId());
}
