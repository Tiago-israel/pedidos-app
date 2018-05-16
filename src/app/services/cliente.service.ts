import { Observable } from 'rxjs/Observable';
import { Http, ResponseContentType } from '@angular/http';
import { Cliente } from './../models/cliente.model';
import { Injectable } from "@angular/core";
import { BaseService } from "./base-service";

@Injectable()
export class ClienteService extends BaseService<Cliente>{

    constructor(public http: Http) {
        super(http, "Clientes");
    }

    public uploadImagem(file: File, id : string): Observable<any> {
        let formData: FormData = new FormData();
        formData.append("file", file);
        return this.http.post(`${this.baseUrl}/Clientes/upload/${id}`, formData,);
    }

    public downloadImagem(fileName: string): Observable<Blob> {
        return this.http.get(`${this.baseUrl}/Clientes/download/${fileName}`, { responseType: ResponseContentType.Blob }).map(res => res.blob());
    }

}