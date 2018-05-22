import { ProdutoService } from './../../services/produto.service';
import { Component, OnInit } from "@angular/core";
import { Produto } from '../../../shared/models/produto.model';
import { LoadingService } from '../../../shared/services/loading.service';

@Component({
    selector: 'listagem-produtos',
    templateUrl: './listagem-produtos.component.html',
    styleUrls: ['./listagem-produtos.component.css']
})
export class ListagemProdutosComponent implements OnInit {

    public produto: Produto = new Produto();
    public produtos: Produto[] = [];

    public constructor(
        private produtoService: ProdutoService,
        private loadingService: LoadingService
    ) { }

    ngOnInit(): void {
        this.buscarTodos();
    }

    public buscarTodos(): void {
        this.loadingService.show();
        this.produtoService.getAll().subscribe(produtos => {
            this.produtos = produtos;
            this.loadingService.hide();
        });
    }
}