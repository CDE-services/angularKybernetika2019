import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Osoba } from '../app.model';
import { OsobaService } from '../service/osoba.service';

@Component({
  selector: 'app-osoba-edit',
  templateUrl: './osoba-edit.component.html',
  styleUrls: ['./osoba-edit.component.css']
})
export class OsobaEditComponent implements OnInit {
  osoba: Osoba = new Osoba(-1, 'Miška', 'Bačíková', '');

  constructor(
    private ar: ActivatedRoute,
    private location: Location,
    private osobaService: OsobaService
  ) {}

  ngOnInit(): void {
    this.ar.params.subscribe(
      (params: Params) => {
        const id = +params['id'];
        if (!id) {
          this.osoba = new Osoba(-1, '', '', '');
        } else {
          this.osobaService.getOsoba(id).subscribe(
            data => {
              this.osoba = data;
              this.osoba.Priezvisko = this.osoba['Priezviesko'];
            }
          );
        }
      });
  }

  ulozOsoba(): void {
    if (this.osoba.Id === -1) {
      this.osobaService.addOsoba(this.osoba).subscribe(
        data => {
          this.osoba.Id = data.Id;
          this.location.back();
        }
      );
    } else {
      this.osobaService.editOsoba(this.osoba).subscribe(
        data => {
          console.log(data + ' bolo aktualizovane');
          this.location.back();
        }
      );
    }
  }

  resetOsoba(): void {
    if (this.osoba.Id === -1) {
      this.osoba.Meno = '';
      this.osoba.Priezvisko = '';
    } else {
      // do nothing
    }
  }

  osobaToString(): string {
    return `${this.osoba.Id}. ${this.osoba.Meno} ${this.osoba.Priezvisko}`;
  }
}
