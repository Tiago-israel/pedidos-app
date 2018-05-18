import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'

export abstract class BaseService<T>{

    protected baseUrl: string = "http://localhost:60996/api";
    protected resource: string;

    protected http: Http;

    constructor(http: Http, resource: string) {
        this.http = http;
        this.resource = resource;
    }

    public get(Id?: string): Observable<T> {
        return this.http.get(`${this.baseUrl}/${this.resource}/${Id}`).map(response => response.json());
    }

    public getAll(): Observable<T[]> {
        return this.http.get(`${this.baseUrl}/${this.resource}`).map(response => response.json());
    }

    public post(body: T): Observable<T> {
        return this.http.post(`${this.baseUrl}/${this.resource}`, body).map(response => response.json());
    }

    public put(Id: string, body: T): Observable<any> {
        return this.http.put(`${this.baseUrl}/${this.resource}/${Id}`, body);
    }

    public delete(Id: string): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${this.resource}/${Id}`);
    }
}