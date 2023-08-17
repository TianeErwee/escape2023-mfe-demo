import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    pathMatch: 'full',
    path: '',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./components/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'missing',
    loadChildren: () =>
      import('@bbd-mfe-new/missing-microfrontend').then(
        (m) => m.MissingMicrofrontendModule
      ),
  },
];
