import { Component, computed, inject, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  routeParam: Signal<string>;

  constructor() {
    const obs = toSignal(this.route.paramMap);
    this.routeParam = computed(() => obs()?.get('id') ?? '');
  }
}
