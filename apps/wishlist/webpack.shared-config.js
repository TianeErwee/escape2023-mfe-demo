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
  },
};

exports.sharedExposedModules = {
  './TileComponent': 'apps/wishlist/src/app/tile/tile.component.ts',
  './ListModule': 'apps/wishlist/src/app/list/list.module.ts',
};
