import { NgModule } from '@angular/core';

import { MissingMicroFrontendRoutingModule } from './missing-micro-frontend-routing.module';
import { MissingMicroFrontendComponent } from './missing-micro-frontend.component';

@NgModule({
  declarations: [MissingMicroFrontendComponent],
  imports: [MissingMicroFrontendRoutingModule],
  exports: [MissingMicroFrontendComponent],
})
export class MissingMicroFrontendModule {}
