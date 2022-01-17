import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/Service/ClienteService';

@Component({
  selector: 'app-cliente-modal',
  templateUrl: './cliente-modal.component.html',
  styleUrls: ['./cliente-modal.component.css']
})
export class ClienteModalComponent implements OnInit {

  cliente!: Cliente;
  constructor(
    private dialogRef: MatDialogRef<ClienteModalComponent>,
    private clienteService: ClienteService,
    @Inject(MAT_DIALOG_DATA) private data: Cliente) { }

  ngOnInit(): void {
    this.cliente = new Cliente();
    this.cliente.idcliente = this.data.idcliente;
    this.cliente.nome = this.data.nome;
    this.cliente.email = this.data.email;
    this.cliente.telefone = this.data.telefone;
    this.cliente.endereco = this.data.endereco;
    this.cliente.nip = this.data.nip;
    this.cliente.descricao = this.data.descricao;

  }

  salvar(){
    if (this.cliente != null && this.cliente.idcliente > 0) {
      this.clienteService.editar(this.cliente).subscribe(()=>{
        return this.clienteService.listar().subscribe(data=>{
          this.clienteService.clienteActualizar.next(data);
        })
      }); 
    }else{
      this.clienteService.registrar(this.cliente).subscribe(data=>{
        this.clienteService.listar().subscribe(data=>{
          this.clienteService.clienteActualizar.next(data);
        })
      })
    }
    this.cancelar();
  }
  cancelar(){
    this.dialogRef.close();
  }

}
