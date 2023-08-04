import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { DashboardTileComponent } from '../dashboard-tile/dashboard-tile.component';
import { DashboardTileMicrofrontend } from '../../models/microfrontend';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'bbd-mfe-new-home',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, DashboardTileComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  // additionalOutlets: string[] = [];
  dashboardMfes: DashboardTileMicrofrontend[] = [];

  constructor(private router: Router) {
    console.log('HOME');

    const options = environment.menuConfig;
    options.forEach((item) => {
      if (item.dashboardTileModel) {
        this.dashboardMfes.push(item.dashboardTileModel);
      }
    });
    console.log(this.dashboardMfes);
    // const homeRoute = this.router.config.find((r) => r.path === 'home');
    // if (homeRoute) {
    //   const children = homeRoute.children;
    //   if (children) {
    //     children.forEach((c) => {
    //       if (c.outlet) {
    //         this.additionalOutlets.push(c.outlet);
    //       }
    //     });
    //   }
    // }

    // this.router.events.subscribe((event) => {
    //   console.log(event);
    // });
  }
}
