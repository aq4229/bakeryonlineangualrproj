import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ReservationComponent } from './reservation/reservation.component';
import { WellcomeComponent } from './wellcome/wellcome.component';
import { ContactComponent } from './contact/contact.component';
import { NewsComponent } from './news/news.component';



const routes: Routes = [
  {
    path: '',
    component: WellcomeComponent
  },

  {
    path: 'menu',
    component: MenuComponent
  },

  {
    path: 'reservation',
    component: ReservationComponent
  },

  {
    path: 'contact',
    component: ContactComponent
  },

  {
    path: 'news',
    component: NewsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
