import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { SeriesService } from '../series.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { RenderItemDetailsComponent } from '../../shared/components/render-item-details/render-item-details.component';

@Component({
  selector: 'app-serie-detail',
  imports: [RenderItemDetailsComponent],
  templateUrl: './serie-detail.component.html',
  styleUrl: './serie-detail.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SerieDetailComponent {
  public readonly seriesService: SeriesService = inject(SeriesService);
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  private readonly routeParam = toSignal(this.route.paramMap);

  public readonly currentId = computed(
    () => this.routeParam()?.get('id') ?? ''
  );
  public readonly data = this.seriesService.getSerieById(this.currentId());
}
