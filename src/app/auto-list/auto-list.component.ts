import { Component } from '@angular/core';
import { Auto } from '../app.model';

@Component({
  selector: 'app-auto-list',
  templateUrl: './auto-list.component.html',
  styleUrls: ['./auto-list.component.css']
})
export class AutoListComponent {
  auta: Auto[] = [
    new Auto(1, 'AB123YC', 'Neskutocne auticko'),
    new Auto(2, 'JK789YT', 'Nenormalne auticko'),
    new Auto(3, 'BN698IX', 'Stara sunka'),
    new Auto(4, 'WX890YA', 'Este starsia sunka')
  ];
}
