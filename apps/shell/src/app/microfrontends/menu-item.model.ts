
import { LoadRemoteModuleOptions } from "@angular-architects/module-federation";
import { Microfrontend } from "./microfrontend";


export interface MenuItemModel {
  type: 'angular' | 'other';
  angularModel: Microfrontend | null;
  otherModel: OtherModuleModel | null;
}

export type OtherModuleModel = LoadRemoteModuleOptions & {
  matcher: string;
  importName: string;
  elementName: string;
  routePath: string;
  remoteName: string;
}

