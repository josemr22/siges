import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewClientsComponent } from './view-clients/view-clients.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ver-clientes',
    pathMatch: 'full'
  },
  {
    path: 'ver-clientes',
    component: ViewClientsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
