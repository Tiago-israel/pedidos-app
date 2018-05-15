import { Cliente } from './models/cliente.model';
import { ClienteService } from './services/cliente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  ngOnInit(): void {
  }

  title = 'app';

  constructor(private clienteService : ClienteService){}

}
