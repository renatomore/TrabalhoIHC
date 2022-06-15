import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Vendas',
    url: '/vendas/vendas',
    iconComponent: { name: 'cil-cart' },
    class: 'custom-nav-item'
  },
  {
    name: 'Clientes',
    url: '/clientes/clientes',
    iconComponent: { name: 'cil-user' },
    class: 'custom-nav-item'
  },
  {
    name: 'Produtos',
    url: '/produtos/produtos',
    iconComponent: { name: 'cil-basket' },
    class: 'custom-nav-item'
  },
  {
    name: 'Vendedores',
    url: '/vendedores/vendedores',
    iconComponent: { name: 'cil-group' },
    class: 'custom-nav-item'
  }
];
