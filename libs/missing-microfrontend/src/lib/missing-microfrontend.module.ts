import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { missingMicrofrontendRoutes } from './lib.routes';
import { MissingPageComponent } from './missing-page/missing-page.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule.forChild(missingMicrofrontendRoutes)
  ],
  declarations: [MissingPageComponent],
})
export class MissingMicrofrontendModule {}
