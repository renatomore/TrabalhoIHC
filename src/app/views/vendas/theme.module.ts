import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardModule, GridModule, NavModule, UtilitiesModule, TabsModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';

import { VendasComponent, ThemeColorComponent } from './vendas.component';

// Theme Routing
import { ThemeRoutingModule } from './theme-routing.module';
import { NovoPedidoComponent } from './novo-pedido/novo-pedido.component';

@NgModule({
  imports: [
    CommonModule,
    ThemeRoutingModule,
    CardModule,
    GridModule,
    UtilitiesModule,
    IconModule,
    NavModule,
    TabsModule
  ],
  declarations: [
    NovoPedidoComponent,
    VendasComponent,
    ThemeColorComponent,
  ]
})
export class ThemeModule {
}
