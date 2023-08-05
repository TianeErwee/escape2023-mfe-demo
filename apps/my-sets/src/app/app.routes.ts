import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        loadChildren: () => import('./list/list.module').then(m => m.ListModule)
    }
];
