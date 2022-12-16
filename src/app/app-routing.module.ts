import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'body', component: BodyComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'films', component: FilmsComponent },
  { path: 'perso', component: PersoComponent },
  { path: 'planete', component: PlaneteComponent },
  { path: 'vaisseaux', component: VaisseauxComponent },
  { path: 'especes', component: EspecesComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
