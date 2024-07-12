import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  contador = 5;
  derivedObs = this.contador * 2;
  obs = new BehaviorSubject<number>(this.contador * 2);

  ngOnInit(): void {
    this.obs.subscribe((c) => {
      this.derivedObs = c;
    });
  }

  ngOnDestroy(): void {
    this.obs.unsubscribe();
  }

  aumentarContador() {
    this.contador++;
    this.obs.next(this.contador * 2);
    this.derivedObs;
  }
  reducirContador() {
    this.contador--;
    this.obs.next(this.contador * 2);
  }
}
