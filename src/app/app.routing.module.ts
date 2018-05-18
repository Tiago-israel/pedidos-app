import { NotFoundComponent } from './shared/components/404/not-found.component';
import { ListagemClientesComponent } from './cliente/components/listagem-cliente/listagem-cliente.component';
import { NgModule,ModuleWithProviders } from "@angular/core";
import { Routes,RouterModule} from "@angular/router";
import { ListagemProdutosComponent } from './produto/components/listagem-produtos/listagem-produtos.component';

const appRoutes : Routes = [
    {path : 'clientes',component : ListagemClientesComponent},
    {path : 'produtos',component : ListagemProdutosComponent},
    { path: '**', component: NotFoundComponent }
]
@NgModule({
    imports : [RouterModule.forRoot(appRoutes , {useHash : true})],
    exports : [RouterModule] 
})
export class AppRoutingModule{}