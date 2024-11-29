import { Component, inject } from '@angular/core';
import { ItemsListComponent } from '../shared/components/items-list/items-list.component';
import { ItemMapperService } from '../core/services/item-mapper.service';
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

  private data = this.charactersService.getCharacters();

  public itemsInfo = this.itemDataMapper.CharactersToItemList(this.data);
}
