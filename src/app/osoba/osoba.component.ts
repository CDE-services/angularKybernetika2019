import { Component, Input } from '@angular/core';
import { Osoba } from '../app.model';

@Component({
  selector: 'app-osoba',
  templateUrl: './osoba.component.html',
  styleUrls: ['./osoba.component.css']
})
export class OsobaComponent {
  @Input() osoba: Osoba = new Osoba(-1, 'Miška', 'Bačíková',
                           'https://kpi.fei.tuke.sk/sites/www.kpi.fei.tuke.sk/files/pictures/picture-2245-1500288053.jpg');
  pictureWidth = 100;
}
