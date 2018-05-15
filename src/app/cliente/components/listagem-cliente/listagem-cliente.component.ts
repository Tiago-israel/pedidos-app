
import { Component, OnInit } from "@angular/core";
import { Cliente } from "../../../models/cliente.model";
import { ClienteService } from "../../../services/cliente.service";
import { Status } from "../../../enums/status.enum";
import { Subscriber } from "rxjs/Subscriber";

declare var $: any;

@Component({
    selector: 'litagem-cliente',
    templateUrl: './listagem-cliente.component.html',
    styleUrls: ['./listagem-cliente.component.css']
})
export class ListagemClientesComponent implements OnInit {

    public clientes: Cliente[] = [];
    public cliente: Cliente = new Cliente();
    public status: string = Status.Novo;
    public tituloModal : string = "Cadastro";

    constructor(private clienteService: ClienteService) {

    }

    ngOnInit(): void {
        this.buscarTodos();
    }

    public salvar(cliente: Cliente): void {
        if (cliente.id) {
            this.editar(cliente);
        } else {
            this.clienteService.post(cliente).subscribe(() => {
                this.buscarTodos();
            });
        }
    }

    public editar(cliente: Cliente): void {
        this.clienteService.put(cliente.id, cliente).subscribe(() => {
            this.buscarTodos();
            this.fecharModal();
        });
    }

    public buscarTodos(): void {
        this.clienteService.getAll().subscribe(clientes => {
            this.clientes = clientes;
        });
    }

    public carregarDadosEdicao(Id: string): void {
        this.clienteService.get(Id).subscribe(cliente => {
            this.cliente = cliente;
            this.status = Status.Edicao;
            this.tituloModal = `Editar`;
            this.abrirModal();
        });
    }

    public carregarDadosDetalhes(Id: string): void {
        this.clienteService.get(Id).subscribe(cliente => {
            this.cliente = cliente;
            this.status = Status.Detalhes;
            this.tituloModal = `Detalhes`;
            this.abrirModal();
        });
    }

    public excluir(Id: string): void {
        this.clienteService.delete(Id).subscribe(() => {
            this.buscarTodos();
        })
    }

    private abrirModal(): void {
        $('#modal-cadastro').modal("show");
    }

    private fecharModal(): void {
        $('#modal-cadastro').modal("hide");
    }
}