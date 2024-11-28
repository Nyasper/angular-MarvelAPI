import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  Signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-details',
  standalone: true,
  imports: [],
  templateUrl: './item-details.component.html',
  styleUrl: './item-details.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemDetailsComponent {
  private route: ActivatedRoute = inject(ActivatedRoute);
  private routeParam = toSignal(this.route.paramMap);
  private currentId = this.getCurrentId();

  constructor() {
    effect(() => console.log({ nameSpace: this.getCurrentId()() }));
  }

  private getCurrentId(): Signal<number> {
    return computed(() => {
      const currentId: number = Number(this.routeParam()?.get('id')) ?? 0;
      return currentId;
    });
  }
}
