import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { AppInitService } from './app-init.service';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { LookupService, MenuUtils } from '@bbd-mfe-new/microfrontends';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpinnerComponent } from '@bbd-mfe-new/block-ui';
import { NgxsModule } from '@ngxs/store';
import { environment } from '@bbd-mfe-new/environment';
import { LegoFacadeService, LegoState, StoreModule } from '@bbd-mfe-new/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { DashboardTileComponent } from './components/dashboard-tile/dashboard-tile.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HomeComponent } from './components/home/home.component';


export function INIT_APP(
  appLoadService: AppInitService,
  lookupService: LookupService,
  router: Router
) {
  return async () => {
    await appLoadService.init();
    const routes = await lookupService.initialise(appRoutes);
    console.log(routes);
    return router.resetConfig(routes);
  };
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    MatCardModule,
    MatTabsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SpinnerComponent,
    NgxsModule.forRoot([], {
      developmentMode: !environment.production,
    }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    StoreModule,
    MatProgressSpinnerModule
  ],
  providers: [
    AppInitService,
    {
      provide: APP_INITIALIZER,
      useFactory: INIT_APP,
      deps: [AppInitService, LookupService, Router],
      multi: true,
    },
    MenuUtils,
    LegoFacadeService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
