import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '@coreui/icons-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// CoreUI Modules
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

// utils
import { DocsComponentsModule } from '@docs-components/docs-components.module';

// views
import { CategoriasComponent } from './categorias/categorias.component';
import { NovaCategoriaComponent } from './nova-categoria/nova-categoria.component';

// Components Routing
import { CategoriasRoutingModule } from './categorias-routing.module';

@NgModule({
  imports: [
    CardModule,
    GridModule,
    IconModule,
    CommonModule,
    DocsComponentsModule,
    CommonModule,
    CategoriasRoutingModule,
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
  ],
  declarations: [
    NovaCategoriaComponent,
    CategoriasComponent
  ],
})
export class CategoriasModule {}
