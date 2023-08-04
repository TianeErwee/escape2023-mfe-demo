import { loadRemoteModule } from '@angular-architects/module-federation';
import {
  CanMatchFn,
  Route,
  UrlSegment,
  UrlSegmentGroup,
  UrlTree,
} from '@angular/router';
import { environment } from '../../../environments/environment';

export const mfeAvailableGuard: CanMatchFn = (
  route: Route,
  segments: UrlSegment[]
) => {
  const menuItem = environment.menuConfig.find((item) =>
    item.routerLink.includes(segments[0].path)
  );

  if (menuItem) {
    if (menuItem.angularModel) {
      const o = menuItem.angularModel;
      return loadRemoteModule({
        remoteEntry: o.remoteEntry,
        remoteName: o.remoteName,
        exposedModule: o.exposedModule,
      } as any)
        .then((m) => {
          return true;
        })
        .catch((err) => {
          const seg = [new UrlSegment('missing', {})];
          const group = new UrlSegmentGroup([], {
            primary: new UrlSegmentGroup(seg, {}),
          });
          const tree: UrlTree = new UrlTree(group);
          return tree;
        });
    } else {
      return true;
    }
  } else {
    const seg = [new UrlSegment('missing', {})];
    const group = new UrlSegmentGroup([], {
      primary: new UrlSegmentGroup(seg, {}),
    });
    const tree: UrlTree = new UrlTree(group);
    return tree;
  }
};
