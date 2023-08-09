import { Route } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const appRoutes: Route[] = [
  {
    pathMatch: 'full',
    path: '',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'missing',
    loadChildren: () =>
      import('@bbd-mfe-new/missing-microfrontend').then(
        (m) => m.MissingMicrofrontendModule
      ),
  },
];
