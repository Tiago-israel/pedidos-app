import { CadastroClienteComponent } from './components/cadastro-cliente/cadastro-cliente.component';

import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { ClienteService } from "../services/cliente.service";
import { NgModule } from "@angular/core";
import { ListagemClientesComponent } from "./components/listagem-cliente/listagem-cliente.component";
import {FormsModule} from '@angular/forms';

@NgModule({
    declarations: [
      ListagemClientesComponent,
      CadastroClienteComponent
    ],
    imports: [
      BrowserModule,
      HttpModule,
      FormsModule
    ],
    providers: [
      ClienteService
    ],
    exports:[
        ListagemClientesComponent
    ]
  })
  export class ClienteModule { }
  