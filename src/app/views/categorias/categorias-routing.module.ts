import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoriasComponent } from './categorias/categorias.component';
import { NovaCategoriaComponent } from './nova-categoria/nova-categoria.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'categorias',
    },
    children: [
      {
        path: '',
        redirectTo: 'categorias',
      },
      {
        path: 'categorias',
        component: CategoriasComponent,
        data: {
          title: 'categorias',
        },
      },
      {
        path: 'nova-categoria',
        component: NovaCategoriaComponent,
        data: {
          title: 'nova-categoria',
        },
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriasRoutingModule {}

