import { Component } from '@angular/core';
import { Osoba } from '../app.model';

@Component({
  selector: 'app-osoba-list',
  templateUrl: './osoba-list.component.html',
  styleUrls: ['./osoba-list.component.css']
})
export class OsobaListComponent {
  osoby: Osoba[] = [
    new Osoba(1, 'Miska', 'Bacikova',
    'assets/images/michaela-bacikova.jpg'),
    new Osoba(2, 'Tomáš', 'Čižmár',
    'assets/images/kevin-spacey.jpg'),
    new Osoba(3, 'Stano', 'Zavila',
    'assets/images/benedict-cucumberbatch.jpg'),
    new Osoba(4, 'Martinka', 'Révayová',
    'assets/images/angelina-jolie.jpg')
  ];
}
