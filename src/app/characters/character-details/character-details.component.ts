import { Component, Signal, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-details',
  standalone: true,
  imports: [],
  templateUrl: './character-details.component.html',
  styleUrl: './character-details.component.css',
})
export class CharacterDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  routeParam: Signal<string>;

  constructor() {
    const obs = toSignal(this.route.paramMap);
    this.routeParam = computed(() => obs()?.get('id') ?? '');
  }
}
