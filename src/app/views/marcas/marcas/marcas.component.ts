import { Component } from '@angular/core';
import { MarcasService } from '../../../services/marcas/marcas.service';
import { IconSetService } from '@coreui/icons-angular';
import { brandSet, flagSet, freeSet } from '@coreui/icons';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.scss'],
  providers: [IconSetService],
})
export class MarcasComponent {
  public title = 'Produtos';
  public icons!: [string, string[]][];

  constructor(
    public iconSet: IconSetService,
    private marcasService: MarcasService
  )
  {
    iconSet.icons = { ...freeSet, ...brandSet, ...flagSet };
  }

  public listaMarcas: any;

  ngOnInit(){
    this.marcasService.content().subscribe((result) => {
      this.listaMarcas = result['marcas'];
    });
  }

}
