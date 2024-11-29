import { Component, Signal, inject } from '@angular/core';
import { ItemsListComponent } from '../shared/components/items-list/items-list.component';
import type { ItemList } from '../core/models/itemsListInteface';
import { ItemMapperService } from '../core/services/item-mapper.service';
import { CharactersResult } from '../core/models/marvelApiInterface';
import { CharactersService } from './characters.service';

@Component({
  selector: 'app-characters',
  imports: [ItemsListComponent],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css',
})
export class CharactersComponent {
  private charactersService: CharactersService = inject(CharactersService);
  private itemDataMapper: ItemMapperService = inject(ItemMapperService);

  private data: Signal<CharactersResult[]> =
    this.charactersService.getCharacters();

  public itemsInfo: Signal<ItemList[]> =
    this.itemDataMapper.CharactersToItemList(this.data);
}
