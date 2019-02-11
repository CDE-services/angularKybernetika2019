import { AutoComponent } from './auto/auto.component';
import { AutoEditComponent } from './auto-edit/auto-edit.component';
import { AutoListComponent } from './auto-list/auto-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OsobaListComponent } from './osoba-list/osoba-list.component';
import { OsobaEditComponent } from './osoba-edit/osoba-edit.component';
import { OsobaComponent } from './osoba/osoba.component';

const routes: Routes = [
  { path: '', redirectTo: '/auta', pathMatch: 'full' },
  { path: 'osoby',      component: OsobaListComponent },
  { path: 'auta',       component: AutoListComponent  },
  { path: 'osoba-edit/:id', component: OsobaEditComponent },
  { path: 'auto-edit/:id',  component: AutoEditComponent  },
  { path: 'osoba/:id',  component: OsobaComponent  },
  { path: 'auto/:id',   component: AutoComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
