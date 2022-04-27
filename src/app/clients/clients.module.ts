import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ViewClientsComponent } from './view-clients/view-clients.component';
import { MaterialModule } from '../material/material.module';
import { ClientFormComponent } from './client-form/client-form.component';


@NgModule({
  declarations: [
    ViewClientsComponent,
    ClientFormComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    MaterialModule,
  ]
})
export class ClientsModule { }
