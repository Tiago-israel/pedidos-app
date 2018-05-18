import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { ListagemClientesComponent } from './components/listagem-cliente/listagem-cliente.component';

const clientesRoutes: Routes = [
    { path: 'clientes', component: ListagemClientesComponent }
]

@NgModule({
    imports: [RouterModule.forChild(clientesRoutes)],
    exports: [RouterModule]
})
export class ClienteRoutingModule { }