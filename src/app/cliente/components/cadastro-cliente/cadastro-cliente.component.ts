import { Cliente } from './../../../models/cliente.model';
import { ClienteService } from './../../../services/cliente.service';
import { OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Component } from '@angular/core';
import { Status } from '../../../enums/status.enum';
@Component({
    selector: 'cadastro-cliente',
    templateUrl: './cadastro-cliente.component.html',
    styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

    @Input("cliente") public cliente: Cliente = new Cliente();
    @Input("status") public status: string = Status.Novo;
    @Output("file") public fileEmitter: EventEmitter<File> = new EventEmitter<File>();
    @Output("clienteForm") public clienteEmitter: EventEmitter<Cliente> = new EventEmitter<Cliente>();


    constructor(private clienteService: ClienteService) { }

    ngOnInit(): void {

    }

    public onLoadFile(file: File): void {
        this.fileEmitter.emit(file);
    }

    public salvar(): void {
        this.clienteEmitter.emit(this.cliente);
    }
}