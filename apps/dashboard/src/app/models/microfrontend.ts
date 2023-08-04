import { LoadRemoteModuleEsmOptions } from '@angular-architects/module-federation';

export type Microfrontend = LoadRemoteModuleEsmOptions & {
  ngModuleName: string;
  routePath: string;
  type: 'module';
  remoteName: string;
};

export type WebComponentMicrofrontend = LoadRemoteModuleEsmOptions & {
  matcher: string;
  importName: string;
  elementName: string;
  remoteName: string;
  routePath: string;
};

export type DashboardTileMicrofrontend = LoadRemoteModuleEsmOptions & Microfrontend & {
  routerOutletName: string;
};

export type MenuMicrofrontendModel = {
  displayName: string;
  routerLink: string;
  angularModel?: Microfrontend;
  webComponentModel?: WebComponentMicrofrontend;
  dashboardTileModel?: DashboardTileMicrofrontend;
};
