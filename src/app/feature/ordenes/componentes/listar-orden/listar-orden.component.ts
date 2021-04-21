import { Component, OnInit } from '@angular/core';
import { Orden } from '../../shared/model/orden';
import { OrdenesServices } from '../../shared/services/ordenes.services';

@Component({
  selector: 'app-listar-orden',
  templateUrl: './listar-orden.component.html',
  styleUrls: ['./listar-orden.component.css']
})
export class ListarOrdenComponent implements OnInit {

  ordenes:Orden[];

  constructor(protected services:OrdenesServices) {}

  ngOnInit(): void {
   this.listarOrdenes();
  }

  listarOrdenes(){
    this.services.listarOrden()
    .subscribe(data =>{
      this.ordenes=data;
    });
  }

}
