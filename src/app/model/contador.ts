import { Cliente } from "./cliente";
import { Seguimento } from "./seguimento";

export class Contador {
        idcontador!: number;
		numero_contador!:number;
		conta_numero!:number;
		ramal!: string;
		referencia!:string;
		latitude!: DoubleRange;
		longitude!: DoubleRange;
		leitura_anterior!: number;
		nova_leitura!: number;
		descricao!: string;
		cliente!: Cliente;
		seguimento!:Seguimento;
}