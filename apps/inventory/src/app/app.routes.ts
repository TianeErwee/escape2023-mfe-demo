import { Route } from '@angular/router';
import { TileComponent } from './tile/tile.component';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('./list/list.module').then((m) => m.ListModule),
  },
  {
    path: 'tile',
    component: TileComponent
  }
];
