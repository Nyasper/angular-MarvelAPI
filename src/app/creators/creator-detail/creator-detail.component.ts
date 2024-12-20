import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CreatorsService } from '../creators.service';
import { ActivatedRoute } from '@angular/router';
import { RenderItemDetailsComponent } from '../../shared/components/render-item-details/render-item-details.component';

@Component({
  selector: 'app-creator-detail',
  imports: [RenderItemDetailsComponent],
  templateUrl: './creator-detail.component.html',
  styleUrl: './creator-detail.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreatorDetailComponent {
  public readonly creatorsService: CreatorsService = inject(CreatorsService);
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  private readonly routeParam = toSignal(this.route.paramMap);

  public readonly currentId = computed(
    () => this.routeParam()?.get('id') ?? ''
  );
  public readonly data = this.creatorsService.getCreatorById(this.currentId());
}
