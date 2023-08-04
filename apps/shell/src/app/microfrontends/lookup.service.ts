import { Injectable } from '@angular/core';
import { Routes } from '@angular/router';
import { environment } from '../../environments/environment';
import { MenuUtils } from '../../menu-utils';

@Injectable({ providedIn: 'root' })
export class LookupService {
  constructor(private menuUtils: MenuUtils) {}

  public async initialise(): Promise<Routes> {
    return Promise.resolve(this.menuUtils.buildRoutes(environment.menuConfig));
  }
}
