import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Client } from '../view-clients/view-clients.component';
interface Documento {
  value: string;
  viewValue: string;
}
export interface Cotizacion {
  plan: string;
  monto: number;
  fechaV: string;
  fechaC: string;
  opcion?: any
}
const ELEMENT_DATA: Cotizacion[] = [
  { plan: 'Plan A', monto: 2000, fechaV: '10/05/2022', fechaC: '11/05/2022' },
  { plan: 'Plan B', monto: 3500, fechaV: '10/05/2022', fechaC: '11/05/2022' }
]

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
      background-color: #f4d200;
      color: black;
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
  displayedColumns: string[] = ['plan', 'monto', 'fechaV', 'fechaC', 'opcion'];
  dataSource = ELEMENT_DATA;
  documentos: Documento[] = [
    { value: 'dni', viewValue: 'DNI' },
    { value: 'ruc', viewValue: 'RUC' },
  ];

  form: any = {
    doc: 'dni',
    numDoc: null,
    name: null,
    fechaInicio: null,
    comprobante: null,
  }

  comprobantes: Documento[] = [
    { value: 'nv', viewValue: 'Nota de venta' },
    { value: 'b', viewValue: 'Boleta' },
    { value: 'f', viewValue: 'Factura' },
  ];
  modalidad: Documento[] = [
    { value: 'a', viewValue: 'Anual' },
    { value: 'm', viewValue: 'Mensual' },
    { value: 't', viewValue: 'Trimestral' },
    { value: 'q', viewValue: 'Quincenal' },
  ];

  isContratoVisible: boolean = false;
  constructor(@Inject(MAT_DIALOG_DATA) public client: Client) { }

  ngOnInit(): void {

  }

  changeState(state: string) {
    console.log('changing state', state)
  }

  mostrarContrato() {
    this.isContratoVisible = !this.isContratoVisible;
  }

}
