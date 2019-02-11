import { Component, Input, OnInit } from '@angular/core';
import { Osoba } from '../app.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-osoba',
  templateUrl: './osoba.component.html',
  styleUrls: ['./osoba.component.css']
})
export class OsobaComponent implements OnInit {
  @Input() osoba: Osoba = new Osoba(-1, 'Miška', 'Bačíková', '');
  pictureWidth = 100;

  constructor(
    private ar: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.ar.params.subscribe(
      (params: Params) => {
        const id = +params['id'];
        this.osoba = new Osoba(id, 'Janko', 'Hrasko', '/assets/images/angelina-jolie.jpg');
      });
  }

  goBack(): void {
    this.location.back();
  }
}
