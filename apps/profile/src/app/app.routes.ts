import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('./profile/profile.module').then((m) => m.ProfileModule),
  }
];
