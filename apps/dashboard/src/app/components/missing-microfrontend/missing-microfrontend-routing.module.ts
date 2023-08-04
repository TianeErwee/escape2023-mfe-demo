import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissingMicrofrontendComponent } from './missing-microfrontend.component';

const routes: Routes = [
  {
    path: '',
    component: MissingMicrofrontendComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MissingMicrofrontendRoutingModule { }
