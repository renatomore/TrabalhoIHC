import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { produtosComponent } from './accordion/produtos.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'produtos',
    },
    children: [
      {
        path: '',
        redirectTo: 'produtos',
      },
      {
        path: 'produtos',
        component: produtosComponent,
        data: {
          title: 'produtos',
        },
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaseRoutingModule {}

