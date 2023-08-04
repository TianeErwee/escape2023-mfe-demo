import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('./tile/tile.module').then((m) => m.TileModule),
  },
  {
    path: 'tile',
    loadChildren: () =>
      import('./tile/tile.module').then((m) => m.TileModule),
  },
  {
    path: 'list',
    loadChildren: () =>
      import('./list/list.module').then((m) => m.ListModule),
  }
];
