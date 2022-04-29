import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';
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
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styles: [
  ]
})
export class ClientFormComponent implements OnInit {

  displayedColumns: string[] = ['plan', 'monto', 'fechaV', 'fechaC', 'opcion'];
  dataSource = ELEMENT_DATA;

  pokemonControl = new FormControl();
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
  isEditableMont: boolean = true;

  constructor(@Inject(MAT_DIALOG_DATA) public client: Client | null) { }

  ngOnInit(): void {
    if (this.client) {
      this.form.name = this.client.cliente;
      this.form.numDoc = this.client.documento;
    }
  }

  save() {
    Swal.fire('Bien Hecho', `${this.client ? 'Actualizado' : 'Guardado'} Correctamente`, 'success');
  }
}
