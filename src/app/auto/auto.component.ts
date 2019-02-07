import { Component, Input } from '@angular/core';
import { Auto } from '../app.model';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css']
})
export class AutoComponent {
  @Input() auticko: Auto = new Auto(-1, 'AV123XY', 'Toto je velmi pekne auto');
}
