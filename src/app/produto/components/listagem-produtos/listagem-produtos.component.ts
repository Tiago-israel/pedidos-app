import { ProdutoService } from './../../services/produto.service';
import { Component, OnInit } from "@angular/core";
import { Produto } from '../../../shared/models/produto.model';

@Component({
    selector: 'listagem-produtos',
    templateUrl: './listagem-produtos.component.html',
    styleUrls: ['./listagem-produtos.component.css']
})
export class ListagemProdutosComponent implements OnInit {

    public produto: Produto = new Produto();
    public produtos: Produto[] = [];

    public constructor(private produtoService: ProdutoService) { }

    ngOnInit(): void {
        this.buscarTodos();
    }

    public buscarTodos(): void {
        this.produtoService.getAll().subscribe(produtos => {
            this.produtos = produtos;
        });
    }
}