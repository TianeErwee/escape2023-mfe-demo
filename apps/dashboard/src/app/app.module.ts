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
    SpinnerComponent
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
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
