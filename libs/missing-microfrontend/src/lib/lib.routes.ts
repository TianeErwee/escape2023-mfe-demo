import { Route } from '@angular/router';
import { MissingPageComponent } from './missing-page/missing-page.component';

export const missingMicrofrontendRoutes: Route[] = [
  {
    path: '',
    component: MissingPageComponent,
  },
];
