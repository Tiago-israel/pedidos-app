import { LoadingComponent } from './shared/components/loading/loading.component';
import { NotFoundComponent } from './shared/components/404/not-found.component';
import { AppRoutingModule } from './app.routing.module';
import { ClienteModule } from './cliente/cliente.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { LoadingService } from './shared/services/loading.service';
import { ProdutoModule } from './produto/produto.module';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    ClienteModule,
    ProdutoModule
  ],
  providers:[
    LoadingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
