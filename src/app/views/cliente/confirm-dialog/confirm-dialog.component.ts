import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/Service/ClienteService';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>
  ) { }

  ngOnInit(): void {

  }
  onEliminar(){
    this.dialogRef.close(true);
  }
  onCancelar(){ 
    this.dialogRef.close(false);
  }
}
