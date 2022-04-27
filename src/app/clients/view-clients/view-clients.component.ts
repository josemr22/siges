import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { exportTable } from 'src/app/helpers/export-table';
import { MatDialog } from '@angular/material/dialog';
import { ClientFormComponent } from '../client-form/client-form.component';

export interface Client {
  idx: number;
  documento: number;
  cliente: string;
  comprobante: string;
  estado: string;
  fecha: string;
  situacion: string;
  opciones: any;
  isEdit?: boolean;
}

const CLIENTS_LIST: Client[] = [
  { idx: 1, documento: 76745964, cliente: 'Renatto Farid', comprobante: 'H9876123', estado: 'Activo', fecha: '22/04/2022', situacion: 'Activo', opciones: '' },
  { idx: 2, documento: 76745964, cliente: 'Renatto Farid', comprobante: 'H9876123', estado: 'Activo', fecha: '22/04/2022', situacion: 'Activo', opciones: '' },
  { idx: 3, documento: 76745964, cliente: 'Renatto Farid', comprobante: 'H9876123', estado: 'Activo', fecha: '22/04/2022', situacion: 'Activo', opciones: '' },
  { idx: 4, documento: 76745964, cliente: 'Renatto Farid', comprobante: 'H9876123', estado: 'Activo', fecha: '22/04/2022', situacion: 'Activo', opciones: '' },
  { idx: 5, documento: 76745964, cliente: 'Renatto Farid', comprobante: 'H9876123', estado: 'Activo', fecha: '22/04/2022', situacion: 'Activo', opciones: '' },
  { idx: 6, documento: 76745964, cliente: 'Renatto Farid', comprobante: 'H9876123', estado: 'Activo', fecha: '22/04/2022', situacion: 'Activo', opciones: '' },
  { idx: 7, documento: 76745964, cliente: 'Renatto Farid', comprobante: 'H9876123', estado: 'Activo', fecha: '22/04/2022', situacion: 'Activo', opciones: '' },
  { idx: 8, documento: 76745964, cliente: 'Renatto Farid', comprobante: 'H9876123', estado: 'Activo', fecha: '22/04/2022', situacion: 'Activo', opciones: '' },
  { idx: 9, documento: 76745964, cliente: 'Renatto Farid', comprobante: 'H9876123', estado: 'Activo', fecha: '23/04/2022', situacion: 'Activo', opciones: '' },
  { idx: 10, documento: 76745964, cliente: 'Renatto Farid', comprobante: 'H9876123', estado: 'Activo', fecha: '22/04/2022', situacion: 'Activo', opciones: '' },
  { idx: 11, documento: 76745964, cliente: 'Jose Luis', comprobante: 'F9876123', estado: 'Activo', fecha: '22/04/2022', situacion: 'Activo', opciones: '' },
  { idx: 12, documento: 76745964, cliente: 'Jose Luis', comprobante: 'H9876123', estado: 'Activo', fecha: '22/04/2022', situacion: 'Activo', opciones: '' }
];

@Component({
  selector: 'app-view-clients',
  templateUrl: './view-clients.component.html',
  styles: [
    `
    `
  ]
})
export class ViewClientsComponent implements OnInit {

  _clients: Client[] = [];

  columns: any[] = [
    { field: 'idx', header: '#', },
    { field: 'documento', header: 'Documento', },
    { field: 'cliente', header: 'Cliente', },
    { field: 'comprobante', header: 'Comprobante', },
    { field: 'estado', header: 'Estado', },
    { field: 'fecha', header: 'Fecha', },
    { field: 'situacion', header: 'Situación', },
  ];

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this._clients = CLIENTS_LIST;
  }

  get clients() {
    return this._clients;
  }

  createClient() {
    const dialogRef = this.dialog.open(ClientFormComponent, {
      width: '900px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  export() {
    let data: any[] = this.clients.map(({
      documento, cliente, comprobante, estado, fecha, situacion
    }) => {
      return ({
        documento, cliente, comprobante, estado, fecha, situacion
      })
    });
    data.splice(0, 1);
    exportTable(data, 'clientes');
  }
}