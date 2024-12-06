import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { ItemList } from '../../../../core/models/itemsListInteface';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'app-item',
  imports: [RouterLink, SkeletonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
})
export class ItemComponent {
  itemInfo = input.required<ItemList>();
  itemImageSrc = computed(() => {
    const path: string | null = this.itemInfo().image?.path ?? null;
    if (!path) return '/image_not_available.jpg';

    return `${this.itemInfo().image.path}.${this.itemInfo()?.image?.extension}`;
  });
}
