import { Component, OnInit } from '@angular/core';
import { ClientesService } from './../../services/clientes/clientes.service';
import { IconSetService } from '@coreui/icons-angular';
import { brandSet, flagSet, freeSet } from '@coreui/icons';

@Component({
  templateUrl: 'clientes.component.html',
  providers: [IconSetService],
})
export class ClientesComponent implements OnInit {
  public title = 'Clientes';
  public icons!: [string, string[]][];

  constructor(
    public iconSet: IconSetService,
    private clientesService: ClientesService
  ) {
    iconSet.icons = { ...freeSet, ...brandSet, ...flagSet };
  }

  public listaClientes: any;

  ngOnInit() {
    this.clientesService.content().subscribe((result) => {
      this.listaClientes = result['clientes'];
    })
  }
}
