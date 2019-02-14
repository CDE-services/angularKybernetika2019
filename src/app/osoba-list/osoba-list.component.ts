import { Component, OnInit } from '@angular/core';
import { Osoba } from '../app.model';
import { OsobaService } from '../service/osoba.service';

@Component({
  selector: 'app-osoba-list',
  templateUrl: './osoba-list.component.html',
  styleUrls: ['./osoba-list.component.css']
})
export class OsobaListComponent implements OnInit {
  osoby: Osoba[] = [];

  constructor(private osobaService: OsobaService) {}

  ngOnInit(): void {
    this.osobaService.getOsoby().subscribe(data => {
      this.osoby = data;
    });
  }
}
