import { fakeAsync, TestBed } from '@angular/core/testing';
import { configureTestSuite } from 'ng-bullet';
import { APP_ROUTES } from '../app.routes';
import { LookupService } from './lookup.service';
import { MenuUtils } from '../../menu-utils';
import { Microfrontend } from './microfrontend';
import { mockFullBuiltRoutes, mockFullMenuConfig, mockLinkOnlyBuiltRoutes, mockLinkOnlyMenuConfig } from './test.data';

declare let window: any;

const menuUtilsSpyObj = jasmine.createSpyObj('MenuUtils', ['buildRoutes']);

describe('LookupService', () => {
  let service: LookupService;
  const menuUtilsSpy = menuUtilsSpyObj;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      providers: [LookupService, { provide: MenuUtils, useValue: menuUtilsSpy }],
    });
  });

  beforeEach(() => {
    window.config = {
      menuConfig: [],
    };
    service = TestBed.inject(LookupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#initialise should build routes', fakeAsync(() => {
    const mySpy = spyOn(menuUtilsSpy, 'buildRoutes').and.callFake((input: Microfrontend[]) => [
      ...input,
      ...APP_ROUTES,
    ]);
    window.config = {
      menuConfig: [],
    };
    service.initialise().then((res) => {
      expect(res).toEqual(APP_ROUTES);
      expect(mySpy).toHaveBeenCalledWith([]);
    });
  }));

  it('#initialise should also build mfe routes', fakeAsync(() => {
    const mySpy = spyOn(menuUtilsSpy, 'buildRoutes').and.callFake(() => {});
    window.config = {
      menuConfig: mockFullMenuConfig,
    };
    service.initialise().then((res) => {
      expect(mySpy).toHaveBeenCalledWith(mockFullBuiltRoutes);
    });
  }));

  it('#initialise should only build mfe link routes', fakeAsync(() => {
    const mySpy = spyOn(menuUtilsSpy, 'buildRoutes').and.callFake(() => {});
    window.config = {
      menuConfig: mockLinkOnlyMenuConfig,
    };
    service.initialise().then((res) => {
      expect(mySpy).toHaveBeenCalledWith(mockLinkOnlyBuiltRoutes);
    });
  }));
});
