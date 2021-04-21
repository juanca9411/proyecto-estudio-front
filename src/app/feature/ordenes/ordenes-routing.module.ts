import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdenComponent } from './componentes/orden/orden.component';
import { ListarOrdenComponent } from './componentes/listar-orden/listar-orden.component';

const routes: Routes = [{
  path: '',
  component: OrdenComponent,
  children: [
  {
    path: 'listar-orden',
    component: ListarOrdenComponent
  }
  ]
}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdenesRoutingModule { }
