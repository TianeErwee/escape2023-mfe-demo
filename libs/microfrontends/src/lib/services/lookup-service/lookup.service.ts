import { Injectable } from '@angular/core';
import { Routes } from '@angular/router';
import { MenuUtils } from '../../utils/menu-utils';
import { environment } from '@bbd-mfe-new/environment';

@Injectable({ providedIn: 'root' })
export class LookupService {
  constructor(private menuUtils: MenuUtils) {}

  public async initialise(appRoutes: Routes): Promise<Routes> {
    return Promise.resolve(this.menuUtils.buildRoutes(environment.menuConfig, appRoutes));
  }
}
