import { Component } from '@angular/core';
import { Osoba } from '../app.model';

@Component({
  selector: 'app-osoba-edit',
  templateUrl: './osoba-edit.component.html',
  styleUrls: ['./osoba-edit.component.css']
})
export class OsobaEditComponent {
  osoba: Osoba = new Osoba(-1, 'Miška', 'Bačíková');

  osobaToString(): string {
    // return this.osoba.Id + '. ' + this.osoba.Meno + ' ' + this.osoba.Priezvisko;

    return `${this.osoba.Id}. ${this.osoba.Meno} ${this.osoba.Priezvisko}`;
  }
}
