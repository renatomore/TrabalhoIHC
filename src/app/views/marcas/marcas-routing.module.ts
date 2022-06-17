import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MarcasComponent } from './marcas/marcas.component';
import { NovaMarcaComponent } from './nova-marca/nova-marca.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'marcas',
    },
    children: [
      {
        path: '',
        redirectTo: 'marcas',
      },
      {
        path: 'marcas',
        component: MarcasComponent,
        data: {
          title: 'marcas',
        },
      },
      {
        path: 'nova-marca',
        component: NovaMarcaComponent,
        data: {
          title: 'nova-marca',
        },
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarcasRoutingModule {}

