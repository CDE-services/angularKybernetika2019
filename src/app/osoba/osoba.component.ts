import { Component, Input, OnInit } from '@angular/core';
import { Osoba } from '../app.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { OsobaService } from '../service/osoba.service';

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
    private location: Location,
    private osobaService: OsobaService
  ) {}

  ngOnInit(): void {
    this.ar.params.subscribe(
      (params: Params) => {
        const id = +params['id'];
        this.osobaService.getOsoba(id).subscribe(
          data => {
            this.osoba = data;
            this.osoba.Priezvisko = this.osoba['Priezviesko'];
          }
        );
      });
  }

  deleteOsoba(): void {
    this.osobaService.deleteOsoba(this.osoba.Id).subscribe(
      data => {
        console.log(data + ' was deleted');
        this.location.back();
      }
    );
  }
}
