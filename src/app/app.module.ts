import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeatsComponent } from './seats/seats.component';
import { MoviesComponent } from './movies/movies.component';
import { MlComponent } from './ml/ml.component';
import { MbComponent } from './mb/mb.component';

@NgModule({
  declarations: [
    AppComponent,
    SeatsComponent,
    MoviesComponent,
    MlComponent,
    MbComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
