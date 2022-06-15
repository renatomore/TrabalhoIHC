import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientesComponent } from './clientes.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'clientes',
    },
    children: [
      {
        path: '',
        redirectTo: 'clientes',
      },
      {
        path: 'clientes',
        component: ClientesComponent,
        data: {
          title: 'clientes',
        },
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IconsRoutingModule {
}
