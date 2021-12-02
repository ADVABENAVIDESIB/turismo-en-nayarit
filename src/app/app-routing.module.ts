import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { DestinosComponent } from './destinos/destinos.component';
import { HomeComponent } from "./home/home.component";
import { LagunaSantamariaComponent } from './laguna-santamaria/laguna-santamaria.component';
import { NaturalezaComponent } from './naturaleza/naturaleza.component';
import { HomeGaleryComponent } from './home-galery/home-galery.component';
import { Album1Component } from './album1/album1.component';

const routes:Routes=[
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component:HomeComponent},
  { path: 'destinos',component:DestinosComponent},
  { path: 'naturaleza',component:NaturalezaComponent},
  { path: 'laguna-santamaria',component:LagunaSantamariaComponent},
  { path: 'home-galery',component:HomeGaleryComponent},
  { path: 'album1',component:Album1Component}

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
