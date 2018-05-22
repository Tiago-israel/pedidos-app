import { LoadingComponent } from './shared/components/loading/loading.component';
import { NotFoundComponent } from './shared/components/404/not-found.component';
import { AppRoutingModule } from './app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { LoadingService } from './shared/services/loading.service';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers:[
    LoadingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
