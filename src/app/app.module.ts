import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FilmsComponent } from './films/films.component';
import { PersoComponent } from './perso/perso.component';
import { PlaneteComponent } from './planete/planete.component';
import { VaisseauxComponent } from './vaisseaux/vaisseaux.component';
import { EspecesComponent } from './especes/especes.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BodyComponent,
    FooterComponent,
    HeaderComponent,
    FilmsComponent,
    PersoComponent,
    PlaneteComponent,
    VaisseauxComponent,
    EspecesComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
