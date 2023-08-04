import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MissingMicrofrontendRoutingModule } from './missing-microfrontend-routing.module';
import { MissingMicrofrontendComponent } from './missing-microfrontend.component';


@NgModule({
  declarations: [MissingMicrofrontendComponent],
  imports: [
    CommonModule,
    MissingMicrofrontendRoutingModule
  ]
})
export class MissingMicrofrontendModule { }
