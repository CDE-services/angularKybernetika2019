import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
          <!--h1>Toto je moja apka s nazvom {{title}}</h1>
          <app-auto></app-auto>
          <app-osoba></app-osoba>
          <app-test></app-test>
          <app-osoba-edit></app-osoba-edit> -->
          <app-osoba-list></app-osoba-list>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = `AutoParkAngular`;
  pocetDni = 34;
  zmena = 5;
}
