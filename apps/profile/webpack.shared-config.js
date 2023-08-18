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
  '@ngxs/store': {
    singleton: true,
    strictVersion: true,
    requiredVersion: 'auto',
  }
};

exports.sharedExposedModules = {
  './ProfileModule': 'apps/profile/src/app/profile/profile.module.ts',
};
