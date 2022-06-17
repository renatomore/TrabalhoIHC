import { Component } from '@angular/core';
import { VendedoresService } from './../../../services/vendedores/vendedores.service';
import { IconSetService } from '@coreui/icons-angular';
import { brandSet, flagSet, freeSet } from '@coreui/icons';

@Component({
  selector: 'app-vendedores',
  templateUrl: './vendedores.component.html',
  styleUrls: ['./vendedores.component.scss'],
  providers: [IconSetService],
})
export class VendedoresComponent {
  public title = 'Vendedores';
  public icons!: [string, string[]][];

  constructor(
    public iconSet: IconSetService,
    private vendedoresService: VendedoresService
  )
  {
    iconSet.icons = { ...freeSet, ...brandSet, ...flagSet };
  }

  public listaVendedores: any;

  ngOnInit(){
    this.vendedoresService.content().subscribe((result) => {
      this.listaVendedores = result['vendedores'];
    });
  }

}
