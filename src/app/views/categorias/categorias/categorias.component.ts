import { Component } from '@angular/core';
import { CategoriasService } from '../../../services/categorias/categorias.service';
import { IconSetService } from '@coreui/icons-angular';
import { brandSet, flagSet, freeSet } from '@coreui/icons';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss'],
  providers: [IconSetService],
})
export class CategoriasComponent {
  public title = 'Produtos';
  public icons!: [string, string[]][];

  constructor(
    public iconSet: IconSetService,
    private categoriasService: CategoriasService
  )
  {
    iconSet.icons = { ...freeSet, ...brandSet, ...flagSet };
  }

  public listaCategorias: any;

  ngOnInit(){
    this.categoriasService.content().subscribe((result) => {
      this.listaCategorias = result['categorias'];
    });
  }

}
