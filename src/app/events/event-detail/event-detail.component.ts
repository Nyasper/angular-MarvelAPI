import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { EventsService } from '../events.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { RenderItemDetailsComponent } from '../../shared/components/render-item-details/render-item-details.component';

@Component({
  selector: 'app-event-detail',
  imports: [RenderItemDetailsComponent],
  templateUrl: './event-detail.component.html',
  styleUrl: './event-detail.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventDetailComponent {
  public readonly eventsService: EventsService = inject(EventsService);
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  private readonly routeParam = toSignal(this.route.paramMap);

  public readonly currentId = computed(
    () => this.routeParam()?.get('id') ?? ''
  );
  public readonly data = this.eventsService.getEventById(this.currentId());
}
