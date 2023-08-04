exports.sharedDependencies = {
  '@angular/core': {
    singleton: true,
    strictVersion: true,
    requiredVersion: 'auto',
  },
  '@angular/common': {
    singleton: true,
    strictVersion: true,
    requiredVersion: 'auto',
  },
  '@angular/common/http': {
    singleton: true,
    strictVersion: true,
    requiredVersion: 'auto',
  },
  '@angular/router': {
    singleton: true,
    strictVersion: true,
    requiredVersion: 'auto',
  }
};

exports.sharedExposedModules = {
  './TileComponent': 'apps/todo/src/app/tile/component/tile.component.ts',
  './ListModule': 'apps/todo/src/app/list/list.module.ts',
};