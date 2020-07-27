import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WellcomeComponent } from './wellcome/wellcome.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { ReservationComponent } from './reservation/reservation.component';
import { HeaderComponent } from './header/header.component';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    WellcomeComponent,
    MenuComponent,
    ContactComponent,
    ReservationComponent,
    HeaderComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
