import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissingMicroFrontendComponent } from './missing-micro-frontend.component';

const routes: Routes = [
  {
    path: '',
    component: MissingMicroFrontendComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MissingMicroFrontendRoutingModule {}
