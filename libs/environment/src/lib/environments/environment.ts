// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { DynamicEnvironment } from './dynamic-environment';

class Environment extends DynamicEnvironment {
  public production: boolean;
  constructor() {
    super();
    this.production = false;
  }
}

export const environment = new Environment();


// export const environment = {
//   production: false,
//   authConfig: {
//     issuer:
//       'https://login.microsoftonline.com/cccbf502-6b91-40d6-be02-5ffa0eb711d6/v2.0',
//     redirectUri: 'http://localhost:4200/test',
//     clientId: 'ef3cd0a7-a64e-4cfc-ae9b-a2c562a5f92e',
//     responseType: 'code',
//     scope:
//       'openid api://ef3cd0a7-a64e-4cfc-ae9b-a2c562a5f92e/seeka profile email',
//     requireHttps: false,
//     showDebugInformation: true,
//     useSilentRefresh: false,
//     silentRefreshTimeout: 5000,
//     logoutUrl:
//       'https://login.microsoftonline.com/cccbf502-6b91-40d6-be02-5ffa0eb711d6/oauth2/v2.0/logout',
//     strictDiscoveryDocumentValidation: false,
//   },
// };

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
