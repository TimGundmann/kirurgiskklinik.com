import { Routes } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { TreatmentComponent } from "./treatment/treatment.component";

export const kikRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: MainComponent },
    { path: 'treatments', component: TreatmentComponent },
];