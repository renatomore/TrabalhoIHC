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
import { MarcasComponent } from './marcas/marcas.component';
import { NovaMarcaComponent } from './nova-marca/nova-marca.component';

// Components Routing
import { MarcasRoutingModule } from './marcas-routing.module';

@NgModule({
  imports: [
    CardModule,
    GridModule,
    IconModule,
    CommonModule,
    DocsComponentsModule,
    CommonModule,
    MarcasRoutingModule,
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
    NovaMarcaComponent,
    MarcasComponent
  ],
})
export class MarcasModule {}
