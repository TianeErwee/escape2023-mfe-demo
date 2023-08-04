import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
declare let window: any;

@Injectable()
export class AppInitService {

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}
  // This is the method you want to call at bootstrap
  // Important: It should return a Promise
  public init(): Promise<any> {
    return from(
        fetch('assets/app-config.json').then((response) => response.json())
      ).pipe(
        map((config) => {
          console.log(config);
          window.config = config;
          return config;
      })).toPromise();
  }
}
