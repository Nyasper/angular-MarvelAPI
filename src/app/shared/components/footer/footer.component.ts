import { Component, inject } from '@angular/core';
import { MarvelAPIService } from '../../../core/services/marvel-api.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  private readonly _MarvelApiService: MarvelAPIService =
    inject(MarvelAPIService);

  public copyright = this._MarvelApiService.footerContent;
}
