import { LoadingComponent } from './../shared/components/loading/loading.component';
import { LoadingService } from './../shared/services/loading.service';
import { ProdutoService } from './services/produto.service';
import { ListagemProdutosComponent } from './components/listagem-produtos/listagem-produtos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoRoutingModule } from './produto.routing.module';
@NgModule({
    declarations: [
        ListagemProdutosComponent,
        LoadingComponent
    ],
    imports: [
        CommonModule,
        ProdutoRoutingModule
    ],
    providers: [
        ProdutoService,
    ],
    exports: []
})
export class ProdutoModule { }