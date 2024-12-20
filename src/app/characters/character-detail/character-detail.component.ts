import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { RenderItemDetailsComponent } from '../../shared/components/render-item-details/render-item-details.component';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-character-detail',
  imports: [RenderItemDetailsComponent],
  templateUrl: './character-detail.component.html',
  styleUrl: './character-detail.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterDetailComponent {
  public readonly charactersService: CharactersService =
    inject(CharactersService);
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  private readonly routeParam = toSignal(this.route.paramMap);

  public readonly currentId = computed(
    () => this.routeParam()?.get('id') ?? ''
  );
  public readonly data = this.charactersService.getCharacterById(
    this.currentId()
  );

  constructor() {
    effect(() => {
      if (this.data()) {
        console.log('chara data:', this.data());
      }
    });
  }
}
