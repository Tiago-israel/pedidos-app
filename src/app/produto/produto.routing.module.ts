import { ListagemProdutosComponent } from './components/listagem-produtos/listagem-produtos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const produtosRoutes: Routes = [
    { path: 'produtos', component: ListagemProdutosComponent }
]

@NgModule({
    imports: [RouterModule.forChild(produtosRoutes)],
    declarations : [],
    providers : [],
    exports: [RouterModule]
})
export class ProdutoRoutingModule{}