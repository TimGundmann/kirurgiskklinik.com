import { Routes } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { TreatmentComponent } from "./treatment/treatment.component";
import { PriceListComponent } from "./price-list/price-list.component";
import { SurgeonComponent } from "./surgeon/surgeon.component";
import { SafetyComponent } from "./safety/safety.component";
import { ContactComponent } from "./contact/contact.component";

export const kikRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: MainComponent },
    { path: 'treatments', component: TreatmentComponent },
    { path: 'pricelist', component: PriceListComponent },
    { path: 'surgeon', component: SurgeonComponent },
    { path: 'safety', component: SafetyComponent },
    { path: 'contact', component: ContactComponent }
  
];