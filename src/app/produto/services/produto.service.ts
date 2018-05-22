import { Http } from '@angular/http';
import { Injectable } from "@angular/core";
import { Produto } from "../../shared/models/produto.model";
import { BaseHttpService } from "../../shared/services/base-http-service";

@Injectable()
export class ProdutoService extends BaseHttpService<Produto>{
    constructor(public http : Http){
        super(http,"produto");
    }
}