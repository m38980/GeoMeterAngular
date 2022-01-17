import { style } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/Service/ClienteService';
import { ClienteModalComponent } from './cliente-modal/cliente-modal.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']

})
export class ClienteComponent implements OnInit {

  displayedColumns = ['idcliente',
                      'nome',
                      'email',
                      'telefone',
                      'endereco',
                      'nip',
                      'descricao',
                      'editar-eliminar'];
  dataSource!:MatTableDataSource<Cliente>
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  constructor(
    private dialog: MatDialog,
    private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.clienteActualizar.subscribe(data=>{
      this.dataSource =  new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    })
    this.clienteService.listar().subscribe(data => { 
      this.dataSource =  new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });  
  }

  openModal(cliente?: Cliente){
    let cli = cliente != null ? cliente: new Cliente();
    this.dialog.open(ClienteModalComponent,{
      width:'250px',
      data: cliente,
      disableClose:true
    });
  }

  openMenu(){ 
  }

  onDelete(id: number){ 
    let dialogRef = this.dialog.open(ConfirmDialogComponent,{ 
      disableClose:true
    });
    dialogRef.afterClosed().subscribe(estado => { 
      if (estado) {
        this.clienteService.eliminar(id).subscribe(()=>{
          this.clienteService.listar().subscribe(data=>{
            this.dataSource = new MatTableDataSource(data);
          })
        })
      }
    })
  }
  filtrar(valor: string){
    this.dataSource.filter = valor.trim().toLowerCase();
  }
}
