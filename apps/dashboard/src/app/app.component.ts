import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { SpinnerService } from '@bbd-mfe-new/block-ui';
import { filter, tap } from 'rxjs';

@Component({
  selector: 'bbd-mfe-new-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'dashboard';
  links: string[] = [];
  activeLink = '';

  constructor(private router: Router, private spinnerService: SpinnerService) {
    for (const configItem of router.config) {
      if (
        configItem.path &&
        configItem.path !== '' &&
        configItem.path !== 'missing'
      ) {
        this.links.push(configItem.path);
      }
    }
    this.activeLink = this.links[0];

    router.events
      .pipe(
        tap((event) => {
          if (event instanceof NavigationStart) {
            this.spinnerService.showSpinner();
          } else {
            this.spinnerService.hideSpinner();
          }
        })
      )
      .subscribe();
  }

  navigateToLink(link: string) {
    this.activeLink = link;
    this.router.navigateByUrl(link);
  }
}
