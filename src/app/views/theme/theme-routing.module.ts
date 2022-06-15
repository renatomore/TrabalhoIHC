import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendasComponent } from './vendas.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'vendas',
    },
    children: [
      {
        path: '',
        redirectTo: 'vendas',
      },
      {
        path: 'vendas',
        component: VendasComponent,
        data: {
          title: 'Vendas',
        },
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThemeRoutingModule {}
