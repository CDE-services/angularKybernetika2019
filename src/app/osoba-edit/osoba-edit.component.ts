import { Component } from '@angular/core';
import { Osoba } from '../app.model';

@Component({
  selector: 'app-osoba-edit',
  templateUrl: './osoba-edit.component.html',
  styleUrls: ['./osoba-edit.component.css']
})
export class OsobaEditComponent {
  osoba: Osoba = new Osoba(-1, 'Miška', 'Bačíková',
  'http://4.bp.blogspot.com/-mwpo-Nyl3v0/UpOwYBIo8uI/AAAAAAAAE8c/IypGcRuxOsk/s1600/Angelina-Jolie-2013.jpg');

  osobaToString(): string {
    return `${this.osoba.Id}. ${this.osoba.Meno} ${this.osoba.Priezvisko}`;
  }
}
