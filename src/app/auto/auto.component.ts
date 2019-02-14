import { AutoService } from './../service/auto.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Auto } from '../app.model';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css']
})
export class AutoComponent implements OnInit {
  auticko: Auto = new Auto(-1, 'AV123XY', 'Toto je velmi pekne auto');

  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private autoService: AutoService,
    private router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        const id = +params['id'];
        // this.auticko = new Auto(id, 'BM133IJ', 'SUPER AUTO!!!');
        this.autoService.getAuto(id).subscribe(
          data => this.auticko = data
        );
      });
  }

  deleteAuto(): void {
    this.autoService.deleteAuto(this.auticko.Id).subscribe(
      data => {
        console.log(data + ' was deleted');
        this.location.back();
      }
    );
  }
}
