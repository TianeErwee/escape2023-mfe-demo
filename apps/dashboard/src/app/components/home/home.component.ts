import { Component } from '@angular/core';
import {
  DashboardTileMicrofrontend,
  MenuMicrofrontendModel,
} from '@bbd-mfe-new/models';
import { environment } from '@bbd-mfe-new/environment';

@Component({
  selector: 'bbd-mfe-new-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  dashboardMfes: DashboardTileMicrofrontend[] = [];

  constructor() {
    const options = environment.menuConfig;
    options.forEach((item: MenuMicrofrontendModel) => {
      if (item.dashboardTileModel) {
        this.dashboardMfes.push(item.dashboardTileModel);
      }
    });
  }
}
