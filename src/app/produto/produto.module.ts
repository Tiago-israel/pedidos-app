import { ProdutoService } from './services/produto.service';
import { ListagemProdutosComponent } from './components/listagem-produtos/listagem-produtos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
@NgModule({
    declarations: [ListagemProdutosComponent],
    imports: [CommonModule],
    providers: [ProdutoService],
    exports: []
})
export class ProdutoModule { }