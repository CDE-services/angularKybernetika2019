import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OsobaComponent } from './osoba/osoba.component';
import { AutoComponent } from './auto/auto.component';
import { TestComponent } from './test/test.component';
import { OsobaEditComponent } from './osoba-edit/osoba-edit.component';
import { OsobaListComponent } from './osoba-list/osoba-list.component';
import { AutoEditComponent } from './auto-edit/auto-edit.component';
import { AutoListComponent } from './auto-list/auto-list.component';

@NgModule({
  declarations: [
    AppComponent,
    OsobaComponent,
    AutoComponent,
    TestComponent,
    OsobaEditComponent,
    OsobaListComponent,
    AutoEditComponent,
    AutoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
