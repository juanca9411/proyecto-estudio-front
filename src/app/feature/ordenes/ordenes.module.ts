import { NgModule } from '@angular/core';
import { OrdenesRoutingModule } from './ordenes-routing.module';
import { OrdenComponent } from './componentes/orden/orden.component';
import { ListarOrdenComponent } from './componentes/listar-orden/listar-orden.component';
import { OrdenesServices } from './shared/services/ordenes.services';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    OrdenComponent, 
    ListarOrdenComponent
  ],
  imports: [
    OrdenesRoutingModule,
    SharedModule
    
  ],
  providers:[OrdenesServices],
})
export class OrdenesModule { }
