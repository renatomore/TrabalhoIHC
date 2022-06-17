import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VendedoresComponent } from './vendedores/vendedores.component';
import { NovoVendedorComponent } from './novo-vendedor/novo-vendedor.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Vendedores'
    },
    children: [
      {
        path: '',
        redirectTo: 'vendedores'
      },
      {
        path: 'vendedores',
        component: VendedoresComponent,
        data: {
          title: 'vendedores'
        }
      },
      {
        path: 'novo-vendedor',
        component: NovoVendedorComponent,
        data: {
          title: 'novo-vendedor'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendedoresRoutingModule {
}
