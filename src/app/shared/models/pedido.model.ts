import { Cliente } from './cliente.model';
import { modelo } from "./modelo.model";

export class Pedido extends modelo{
    public data : Date;
    public numbero : number;
    public cliente : Cliente;
}