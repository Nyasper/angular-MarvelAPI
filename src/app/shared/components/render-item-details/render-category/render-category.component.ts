import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { ItemsListsTypes } from '../../../../core/models/marvelAPI/common';

@Component({
  selector: 'app-render-category',
  imports: [RouterLink],
  templateUrl: './render-category.component.html',
  styleUrl: './render-category.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RenderCategoryComponent {
  public data = input.required<ItemsListsTypes | null>();

  public categoryName = input.required<string>();
}
