import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VendedoresComponent } from './layout/vendedores.component';

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule {
}
