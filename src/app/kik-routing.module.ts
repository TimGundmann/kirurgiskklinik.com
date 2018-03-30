import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { kikRoutes } from './kik.routes';

@NgModule({
  imports: [
    RouterModule.forRoot(kikRoutes, {useHash: true})
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class KikRoutingModule { }
