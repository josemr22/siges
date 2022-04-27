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
  { idx: 11, documento: 76745964, cliente: 'Renatto Farid', comprobante: 'H9876123', estado: 'Activo', fecha: '22/04/2022', situacion: 'Activo', opciones: '' },
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
export class ViewClientsComponent implements AfterViewInit, OnInit {

  displayedColumns: string[] = ['idx', 'documento', 'cliente', 'comprobante', 'estado', 'fecha', 'situacion', 'opciones'];
  dataSource = new MatTableDataSource<Client>([]);

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.dataSource.data = CLIENTS_LIST;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  createClient() {
    const dialogRef = this.dialog.open(ClientFormComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  export() {
    let data: any[] = this.dataSource.data.map(({
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