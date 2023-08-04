import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
// import { ViewContextComponent } from "./view-context/view-context.component";

export const APP_ROUTES: Routes = [
  {
    path: 'code',
    component: HomeComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'error',
    component: HomeComponent,
  }
];
