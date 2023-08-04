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
    }
  ];
