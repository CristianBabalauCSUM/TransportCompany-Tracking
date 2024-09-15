import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FaqComponent } from './faq/faq.component';
import { PartnersLogoComponent } from './partners-logo/partners-logo.component';
import { FooterComponent } from './footer/footer.component';
import { NewPageComponent } from './new-page/new-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactsInformationComponent } from './contacts-information/contacts-information.component';
import { ContactUsPageComponent } from './contact-us-page/contact-us-page.component';
import { TrackParcelPageComponent } from './track-parcel-page/track-parcel-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FaqComponent,
    PartnersLogoComponent,
    FooterComponent,
    NewPageComponent,
    HomePageComponent,
    ContactsInformationComponent,
    ContactUsPageComponent,
    TrackParcelPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
