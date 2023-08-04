import {
  loadRemoteModule,
  LoadRemoteModuleEsmOptions,
} from '@angular-architects/module-federation';
import { Routes } from '@angular/router';

import { startsWith } from './router.utils';

import { mfeAvailableGuard } from '../guards/mfe-available.guard';
import {
  DashboardTileMicrofrontend,
  MenuMicrofrontendModel,
  Microfrontend,
  WebComponentMicrofrontend,
} from '@bbd-mfe-new/models';

/*istanbul ignore next*/
export class MenuUtils {
  registry: any;

  buildRoutes = (
    options: MenuMicrofrontendModel[],
    appRoutes: Routes
  ): Routes => {
    const angularModels: Microfrontend[] = [];
    const otherModels: WebComponentMicrofrontend[] = [];
    const dashboardTileModels: DashboardTileMicrofrontend[] = [];
    options.forEach((item) => {
      if (item.angularModel) {
        angularModels.push(item.angularModel);
      } else if (item.webComponentModel) {
        otherModels.push(item.webComponentModel);
      } else if (item.dashboardTileModel) {
        dashboardTileModels.push(item.dashboardTileModel);
      }
    });

    const lazyRoutes: Routes = angularModels.map((o) => ({
      path: o.routePath,
      canMatch: [mfeAvailableGuard],
      loadChildren: () =>
        loadRemoteModule({
          remoteEntry: o.remoteEntry,
          remoteName: o.remoteName,
          exposedModule: o.exposedModule,
        } as any).then((m) => {
          return m[o.ngModuleName];
        }),
    }));

    const otherRoutes: Routes = otherModels.map((model) => ({
      matcher: startsWith(model.matcher),
      canMatch: [mfeAvailableGuard],
      data: { importName: model.importName, elementName: model.elementName },
    }));

    this.registry = this.buildRegistry(otherModels);

    return [...lazyRoutes, ...otherRoutes, ...appRoutes];
  };

  buildRegistry = (options: WebComponentMicrofrontend[]): any => {
    const registry: any = {};
    options.forEach((o) => {
      registry[o.matcher] = () =>
        loadRemoteModule({
          type: 'module',
          remoteEntry: o.remoteEntry,
          exposedModule: o.exposedModule,
        } as LoadRemoteModuleEsmOptions);
    });
    return registry;
  };
}
