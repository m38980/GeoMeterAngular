import { Usuario } from "./usuario";

export class Cliente {

	 idcliente!:number;
	 nome!:string; 
	 email!:string; 
	 telefone!:string; 
	 endereco!:string; 
	 nip!:string; 
	 descricao!:string;
	 usuario!: Usuario;
}