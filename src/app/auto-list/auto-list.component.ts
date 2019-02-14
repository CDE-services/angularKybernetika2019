import { AutoService } from './../service/auto.service';
import { Component, OnInit } from '@angular/core';
import { Auto } from '../app.model';

@Component({
  selector: 'app-auto-list',
  templateUrl: './auto-list.component.html',
  styleUrls: ['./auto-list.component.css']
})
export class AutoListComponent implements OnInit {
  auta: Auto[] = [];

  constructor(private autoService: AutoService) {}

  ngOnInit(): void {
    this.autoService.getAuta().subscribe(data => this.auta = data);
    // Lambda vyraz je vlastne skrateny zapis funkcie v tvare:
    // () => {}, pricom ak je tam len jeden parameter,
    // tak zatvorky sa nemusia pisat a ak je tam len jeden prikaz v tele
    // funkcie, tak nemusim pouzivat zlozene zatvorky.
    //
    // Plny zapis lambda vyrazu:
    //
    // this.autoService.getAuta().subscribe(
    //   function(data) { this.auta = data; }
    // );
  }
}
