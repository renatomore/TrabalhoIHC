import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule, GridModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';

import { ClientesComponent } from './clientes.component';
import { NovoClienteComponent } from './novo-cliente/novo-cliente.component';
import { ClientesRoutingModule } from './clientes-routing.module';
import { DocsComponentsModule } from '@docs-components/docs-components.module';

@NgModule({
  imports: [
    ClientesRoutingModule,
    CardModule,
    GridModule,
    IconModule,
    CommonModule,
    DocsComponentsModule
  ],
  declarations: [
    ClientesComponent,
    NovoClienteComponent
  ]
})
export class ClientesModule {
}
