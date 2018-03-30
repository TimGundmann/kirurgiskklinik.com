import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { KikComponent } from './kik.component';
import { MainComponent } from './main/main.component';
import { AppointmentComponent } from './main/appointment/appointment.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { FooterComponent } from './footer/footer.component';
import { KikRoutingModule } from './kik-routing.module';
import { TreatmentComponent } from './treatment/treatment.component';


@NgModule({
  declarations: [
    KikComponent,
    MainComponent,
    AppointmentComponent,
    NavigationBarComponent,
    FooterComponent,
    TreatmentComponent
  ],
  imports: [
    BrowserModule,
    KikRoutingModule
  ],
  providers: [],
  bootstrap: [KikComponent]
})
export class KikModule { }
