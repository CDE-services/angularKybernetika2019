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

  constructor(private ar: ActivatedRoute) {}

  ngOnInit(): void {
    this.ar.params.subscribe(
      (params: Params) => {
        const id = +params['id'];
        this.auto = new Auto(id, 'AB123CD', 'NENORMALNE AUTO!');
      });
  }

  autoToString(): string {
    return `${this.auto.Id}. ${this.auto.Ecv} ${this.auto.Poznamka}`;
  }
}
