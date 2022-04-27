import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { FlexLayoutModule } from '@angular/flex-layout';




@NgModule({
  exports: [
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatMenuModule,
    MatPaginatorModule,
    MatTableModule,
    MatToolbarModule,
    MatSidenavModule,
    MatSortModule,
    MatDialogModule,
    MatGridListModule,
    TableModule,
    InputTextModule
  ]
})
export class MaterialModule { }
