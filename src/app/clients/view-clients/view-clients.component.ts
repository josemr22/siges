import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';

export interface PeriodicElement {
  idx: number;
  documento: number;
  cliente: string;
  comprobante: string;
  estado: string;
  fecha: string;
  situacion: string;
  opciones: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { idx: 1, documento: 76745964, cliente: 'Renatto Farid', comprobante: 'H9876123', estado: 'Activo', fecha: '22/04/2022', situacion: 'Activo', opciones: '' },
  { idx: 2, documento: 76745964, cliente: 'Renatto Farid', comprobante: 'H9876123', estado: 'Activo', fecha: '22/04/2022', situacion: 'Activo', opciones: '' },
  { idx: 3, documento: 76745964, cliente: 'Renatto Farid', comprobante: 'H9876123', estado: 'Activo', fecha: '22/04/2022', situacion: 'Activo', opciones: '' },
  { idx: 4, documento: 76745964, cliente: 'Renatto Farid', comprobante: 'H9876123', estado: 'Activo', fecha: '22/04/2022', situacion: 'Activo', opciones: '' },
  { idx: 5, documento: 76745964, cliente: 'Renatto Farid', comprobante: 'H9876123', estado: 'Activo', fecha: '22/04/2022', situacion: 'Activo', opciones: '' },
  { idx: 6, documento: 76745964, cliente: 'Renatto Farid', comprobante: 'H9876123', estado: 'Activo', fecha: '22/04/2022', situacion: 'Activo', opciones: '' },
  { idx: 7, documento: 76745964, cliente: 'Renatto Farid', comprobante: 'H9876123', estado: 'Activo', fecha: '22/04/2022', situacion: 'Activo', opciones: '' },
  { idx: 8, documento: 76745964, cliente: 'Renatto Farid', comprobante: 'H9876123', estado: 'Activo', fecha: '22/04/2022', situacion: 'Activo', opciones: '' },
  { idx: 9, documento: 76745964, cliente: 'Renatto Farid', comprobante: 'H9876123', estado: 'Activo', fecha: '22/04/2022', situacion: 'Activo', opciones: '' },
  { idx: 10, documento: 76745964, cliente: 'Renatto Farid', comprobante: 'H9876123', estado: 'Activo', fecha: '22/04/2022', situacion: 'Activo', opciones: '' },
  { idx: 11, documento: 76745964, cliente: 'Renatto Farid', comprobante: 'H9876123', estado: 'Activo', fecha: '22/04/2022', situacion: 'Activo', opciones: '' },
  { idx: 12, documento: 76745964, cliente: 'Renatto Farid', comprobante: 'H9876123', estado: 'Activo', fecha: '22/04/2022', situacion: 'Activo', opciones: '' }
];

@Component({
  selector: 'app-view-clients',
  templateUrl: './view-clients.component.html',
  styles: [
  ]
})
export class ViewClientsComponent implements AfterViewInit {

  displayedColumns: string[] = ['idx', 'documento', 'cliente', 'comprobante', 'estado', 'fecha', 'situacion', 'opciones'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor(private _liveAnnouncer: LiveAnnouncer) { }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}