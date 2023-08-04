import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    pathMatch: 'full',
    path: '',
    redirectTo: 'home'
  },
  {
    path: 'missing',
    loadChildren: () => import('./components/missing-microfrontend/missing-microfrontend.module').then(m => m.MissingMicrofrontendModule)
  }
];
