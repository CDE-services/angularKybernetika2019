import { Component } from '@angular/core';
import { Auto } from '../app.model';

@Component({
  selector: 'app-auto-edit',
  templateUrl: './auto-edit.component.html',
  styleUrls: ['./auto-edit.component.css']
})
export class AutoEditComponent {
  auto: Auto = new Auto(-1, 'AB678KY', 'Toto je škaredé auto.');

  autoToString(): string {
    return `${this.auto.Id}. ${this.auto.Ecv} ${this.auto.Poznamka}`;
  }
}
