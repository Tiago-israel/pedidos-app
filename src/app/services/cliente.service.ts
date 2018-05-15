import { Http } from '@angular/http';
import { Cliente } from './../models/cliente.model';
import { Injectable } from "@angular/core";
import { BaseService } from "./base-service";

@Injectable()
export class ClienteService extends BaseService<Cliente>{
    constructor(public  http : Http){
        super(http,"Clientes");
    }
}