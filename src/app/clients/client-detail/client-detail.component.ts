import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Client } from '../view-clients/view-clients.component';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styles: [
    `
     .btn{
       padding: 1.3ch;
       color: white;
       border-radius: 3px;
       margin-left: 15px;
       border: 0;
     }

     .btn-state{
      border-radius: 15px;
      cursor: pointer;
     }

     .activo-color{
      background-color: green;
     }

     .suspendido-color{
      background-color: #dcdf00;
     }

     .cancelado-color{
      background-color: red;
     }

     .header{
       display: flex;
       justify-content: space-between;
       align-items: center;
       margin-bottom: 25px;
     }

     p{
       margin-top: 2ch;
     }

     h1{
       margin-bottom: 0;
     }
    `
  ]
})
export class ClientDetailComponent implements OnInit {

  buttons: any = {
    Activo: [
      {
        label: 'cancelar',
        color: 'Cancelado'
      },
      {
        label: 'suspender',
        color: 'Suspendido'
      }
    ],
    Suspendido: [
      {
        label: 'cancelar',
        color: 'Cancelado'
      },
      {
        label: 'activar',
        color: 'Activo'
      }
    ],
    Cancelado: [
      {
        label: 'Reactivar',
        color: 'Activo'
      }
    ],
  }

  constructor(@Inject(MAT_DIALOG_DATA) public client: Client) { }

  ngOnInit(): void {

  }

  changeState(state: string) {
    console.log('changing state', state)
  }

}
