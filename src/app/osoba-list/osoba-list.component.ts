import { Component } from '@angular/core';
import { Osoba } from '../app.model';

@Component({
  selector: 'app-osoba-list',
  templateUrl: './osoba-list.component.html',
  styleUrls: ['./osoba-list.component.css']
})
export class OsobaListComponent {
  osoby: Osoba[] = [
    new Osoba(-1, 'Miška', 'Bačíková'),
    new Osoba(-1, 'Tomáš', 'Čižmár'),
    new Osoba(-1, 'Stano', 'Zavila'),
    new Osoba(-1, 'Martinka', 'Révayová')
  ];
}
