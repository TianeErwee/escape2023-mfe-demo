import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';

import { APP_ROUTES } from './app/app.routes';
import { MenuItemModel, OtherModuleModel } from './app/microfrontends/menu-item.model';
import { Microfrontend } from './app/microfrontends/microfrontend';
import { startsWith } from './app/router.utils';
import { WrapperComponent } from './app/wrapper/wrapper.component';

/*istanbul ignore next*/
export class MenuUtils {
  registry: any;
  handleMissingMicroFrontend = (err: any) => {
    console.error(err);
    return import('./app/microfrontends/missing-micro-frontend/missing-micro-frontend.module').then(
      (m) => m.MissingMicroFrontendModule,
    );
  };
  buildRoutes = (options: MenuItemModel[]): Routes => {
    const angularModels: Microfrontend[] = [];
    const otherModels: OtherModuleModel[] = [];
    options.forEach((item) => {
      if (item.type === 'angular' && item.angularModel) {
        angularModels.push(item.angularModel);
      } else if (item.type === 'other' && item.otherModel) {
        otherModels.push(item.otherModel);
      }
    });

    const lazyRoutes: Routes = angularModels.map((model) => ({
      path: model.routePath,
      canLoad: [MsalGuard],
      loadChildren: () =>
        loadRemoteModule(model)
          .then((m) => m[model.ngModuleName])
          .catch((err) => this.handleMissingMicroFrontend(err)),
    }));

    const otherRoutes: Routes = otherModels.map((model) => ({
      matcher: startsWith(model.matcher),
      component: WrapperComponent,
      data: { importName: model.importName, elementName: model.elementName },
      canActivate: [MsalGuard]
    }));

    this.registry = this.buildRegistry(otherModels);

    return [...lazyRoutes, ...otherRoutes, ...APP_ROUTES];
  };

  buildRegistry = (options: OtherModuleModel[]): any => {
    const registry: any = {};
    options.forEach((o) => {
      registry[o.matcher] = () =>
        loadRemoteModule({
          type: 'script',
          remoteEntry: o.remoteEntry,
          remoteName: o.remoteName,
          exposedModule: o.exposedModule,
        });
    });
    console.log(registry);
    return registry;
  };
}
