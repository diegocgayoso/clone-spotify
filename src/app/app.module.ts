import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRotas } from './app.routes';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    // FontAwesomeModule,
    RouterModule.forRoot(AppRotas),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
