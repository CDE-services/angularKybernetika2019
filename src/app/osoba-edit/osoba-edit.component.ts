import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Osoba } from '../app.model';

@Component({
  selector: 'app-osoba-edit',
  templateUrl: './osoba-edit.component.html',
  styleUrls: ['./osoba-edit.component.css']
})
export class OsobaEditComponent implements OnInit {
  osoba: Osoba = new Osoba(-1, 'Miška', 'Bačíková', '');

  constructor(private ar: ActivatedRoute) {}

  ngOnInit(): void {
    this.ar.params.subscribe(
      (params: Params) => {
        const id = +params['id'];
        this.osoba = new Osoba(id, 'Janko', 'Hrasko', '/assets/images/angelina-jolie.jpg');
      });
  }

  osobaToString(): string {
    return `${this.osoba.Id}. ${this.osoba.Meno} ${this.osoba.Priezvisko}`;
  }
}
