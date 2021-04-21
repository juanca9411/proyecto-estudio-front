import { Injectable } from "@angular/core";
import { HttpService } from "src/app/core/services/http.service";
import { environment } from "src/environments/environment";
import { Orden } from "../model/orden";

@Injectable()
export class OrdenesServices {

    constructor(protected http:HttpService){   
    }

    crearOrden(orden:Orden){
      return  this.http.doPost<Orden,Boolean>(`${environment.endpoint}/ordenes`,orden,this.http.optsName('Crear Orden'));
    }

    listarOrden(){
       return this.http.doGet<Orden[]>(`${environment.endpoint}/ordenes`,this.http.optsName('Listar Ordenes'));
    }







}