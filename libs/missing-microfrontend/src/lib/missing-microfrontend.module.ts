import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { missingMicrofrontendRoutes } from './lib.routes';
import { MissingPageComponent } from './missing-page/missing-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(missingMicrofrontendRoutes)
  ],
  declarations: [MissingPageComponent],
})
export class MissingMicrofrontendModule {}
