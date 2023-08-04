import { MenuMicrofrontendModel } from '@bbd-mfe-new/models';
import { AuthConfig } from 'angular-oauth2-oidc';

declare const window: any;

/* istanbul ignore next */
export class DynamicEnvironment {
  public get authConfig(): AuthConfig {
    return window.config.authConfig;
  }

  public get menuConfig(): MenuMicrofrontendModel[] {
    return window.config?.menuConfig;
  }
}
