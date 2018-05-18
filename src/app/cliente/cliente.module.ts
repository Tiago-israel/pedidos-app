import { ClienteRoutingModule } from './cliente.routing.module';
import { CadastroClienteComponent } from './components/cadastro-cliente/cadastro-cliente.component';

import { HttpModule } from "@angular/http";
import { NgModule } from "@angular/core";
import { ListagemClientesComponent } from "./components/listagem-cliente/listagem-cliente.component";
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ClienteService } from './services/cliente.service';
import { UploadFileComponent } from '../shared/components/upload/upload-file.component';

@NgModule({
    declarations: [
      ListagemClientesComponent,
      CadastroClienteComponent,
      UploadFileComponent
    ],
    imports: [
      CommonModule,
      HttpModule,
      FormsModule,
      ClienteRoutingModule
    ],
    providers: [
      ClienteService
    ]
  })
  export class ClienteModule { }
  