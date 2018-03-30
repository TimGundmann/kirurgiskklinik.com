import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { KikComponent } from './kik.component';
import { MainComponent } from './main/main.component';
import { AppointmentComponent } from './main/appointment/appointment.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { FooterComponent } from './footer/footer.component';
import { KikRoutingModule } from './kik-routing.module';
import { TreatmentComponent } from './treatment/treatment.component';
import { NavigationLinksComponent } from './navigation-links/navigation-links.component';
import { PriceListComponent } from './price-list/price-list.component';
import { SurgeonComponent } from './surgeon/surgeon.component';
import { SafetyComponent } from './safety/safety.component';
import { ContactComponent } from './contact/contact.component';
import { ContactFormComponent } from './contact/contact-form/contact-form.component';


@NgModule({
  declarations: [
    KikComponent,
    MainComponent,
    AppointmentComponent,
    NavigationBarComponent,
    FooterComponent,
    TreatmentComponent,
    NavigationLinksComponent,
    PriceListComponent,
    SurgeonComponent,
    SafetyComponent,
    ContactComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    KikRoutingModule
  ],
  providers: [],
  bootstrap: [KikComponent]
})
export class KikModule { }
