import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template:  `
    Obsah premennej: {{premenna}}
    <input type="text" [(ngModel)]="premenna">
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  premenna = 'daco';
}
