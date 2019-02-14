import { Location } from '@angular/common';
import { AutoService } from './../service/auto.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Auto } from '../app.model';

@Component({
  selector: 'app-auto-edit',
  templateUrl: './auto-edit.component.html',
  styleUrls: ['./auto-edit.component.css']
})
export class AutoEditComponent implements OnInit {
  auto: Auto = new Auto(-1, 'AB678KY', 'Toto je škaredé auto.');

  constructor(
    private ar: ActivatedRoute,
    private autoService: AutoService,
    private location: Location
    ) {}

  ngOnInit(): void {
    this.ar.params.subscribe(
      (params: Params) => {
        const id = +params['id'];
        if (!id) {
          this.auto = new Auto(-1, '', '');
        } else {
          this.autoService.getAuto(id).subscribe(
            data => this.auto = data
          );
        }
      });
  }

  ulozAuto(): void {
    if (this.auto.Id === -1) {
      this.autoService.addAuto(this.auto).subscribe(
        data => {
          this.auto.Id = data.Id;
          this.location.back();
        }
      );
    } else {
      this.autoService.editAuto(this.auto).subscribe(
        data => {
          console.log(data + ' bolo aktualizovane');
          this.location.back();
        }
      );
    }
  }

  autoToString(): string {
    return `${this.auto.Id}. ${this.auto.Ecv} ${this.auto.Poznamka}`;
  }
}
