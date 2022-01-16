import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeroesModule } from './heroes/heroes.module';
import { ContadorModuel } from './contador/contador.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule, 
    ContadorModuel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
