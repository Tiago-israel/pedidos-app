import { NotFoundComponent } from './shared/components/404/not-found.component';
import { ListagemClientesComponent } from './cliente/components/listagem-cliente/listagem-cliente.component';
import { NgModule,ModuleWithProviders } from "@angular/core";
import { Routes,RouterModule} from "@angular/router";

const appRoutes : Routes = [
    {path : 'clientes',component : ListagemClientesComponent
    },
    { path: '**', component: NotFoundComponent }
]
@NgModule({
    imports : [RouterModule.forRoot(appRoutes , {useHash : true})],
    exports : [RouterModule] 
})
export class AppRoutingModule{}