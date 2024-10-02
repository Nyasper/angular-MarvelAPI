import { Component, inject } from '@angular/core';
import { MarvelAPIService } from '../../../core/services/marvel-api.service';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [PaginationComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  private readonly _MarvelApiService: MarvelAPIService =
    inject(MarvelAPIService);

  public copyright: string = this._MarvelApiService.footerContent;
}
