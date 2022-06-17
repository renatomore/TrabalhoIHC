import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '@coreui/icons-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FormModule,
  GridModule,
  ListGroupModule,
  SharedModule
} from '@coreui/angular';

import { DocsComponentsModule } from '@docs-components/docs-components.module';

import { VendedoresRoutingModule } from './vendedores-routing.module';
import { VendedoresComponent } from './vendedores/vendedores.component';
import { NovoVendedorComponent } from './novo-vendedor/novo-vendedor.component';


@NgModule({
  declarations: [
    VendedoresComponent,
    NovoVendedorComponent
  ],
  imports: [
    CardModule,
    GridModule,
    IconModule,
    CommonModule,
    DocsComponentsModule,
    CommonModule,
    VendedoresRoutingModule,
    DocsComponentsModule,
    CardModule,
    FormModule,
    GridModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    FormModule,
    ButtonModule,
    ButtonGroupModule,
    DropdownModule,
    SharedModule,
    ListGroupModule
  ]
})
export class VendedoresModule {
}
