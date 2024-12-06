import {
  ChangeDetectionStrategy,
  Component,
  output,
  signal,
} from '@angular/core';
import { Button } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
@Component({
  selector: 'app-search-bar',
  imports: [InputTextModule, InputIconModule, IconFieldModule, Button],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBarComponent {
  public inputValue = signal<string>('');
  public valueOutput = output<string>();

  public onInput(e: Event) {
    const input = e.target as HTMLInputElement;
    this.inputValue.set(input.value);
    this.valueOutput.emit(this.inputValue());
  }

  public globalSearch($event: MouseEvent): void {
    console.log('buscando global:', this.inputValue());
  }
}
