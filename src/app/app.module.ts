import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClienteComponent } from './views/cliente/cliente.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ListarComponent } from './Contador/listar/listar.component';
import { AddComponent } from './Contador/add/add.component';
import { EditComponent } from './Contador/edit/edit.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ConfirmDialogComponent } from './views/cliente/confirm-dialog/confirm-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ContadorComponent } from './views/contador/contador.component';
import { ClienteModalComponent } from './views/cliente/cliente-modal/cliente-modal.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import { MatPaginatorPort } from './resource/mat-paginator';


@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    ListarComponent,
    AddComponent,
    EditComponent,
    ConfirmDialogComponent,
    ContadorComponent,
    ClienteModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatInputModule,
    NgbModule,
    MatPaginatorModule
  ],
  providers: [
    {provide: MatPaginatorIntl, useClass: MatPaginatorPort}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
