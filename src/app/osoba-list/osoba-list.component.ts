import { Component } from '@angular/core';
import { Osoba } from '../app.model';

@Component({
  selector: 'app-osoba-list',
  templateUrl: './osoba-list.component.html',
  styleUrls: ['./osoba-list.component.css']
})
export class OsobaListComponent {
  osoby: Osoba[] = [
    new Osoba(-1, 'Miška', 'Bačíková',
    'https://kpi.fei.tuke.sk/sites/www.kpi.fei.tuke.sk/files/pictures/picture-2245-1500288053.jpg'),
    new Osoba(-1, 'Tomáš', 'Čižmár',
    // tslint:disable-next-line:max-line-length
    'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTIzNjEzMTg5MzA5MzY3ODIy/benedict_cumberbatchjpg.jpg'),
    new Osoba(-1, 'Stano', 'Zavila',
    'https://pixel.nymag.com/imgs/daily/vulture/2017/11/01/01-kevin-spacey-1.w700.h700.jpg'),
    new Osoba(-1, 'Martinka', 'Révayová',
    'http://4.bp.blogspot.com/-mwpo-Nyl3v0/UpOwYBIo8uI/AAAAAAAAE8c/IypGcRuxOsk/s1600/Angelina-Jolie-2013.jpg')
  ];
}
