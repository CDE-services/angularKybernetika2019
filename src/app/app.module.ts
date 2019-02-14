import { AutoService } from './service/auto.service';
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
import { HttpClientModule } from '@angular/common/http';
import { OsobaService } from './service/osoba.service';

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
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ AutoService, OsobaService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
