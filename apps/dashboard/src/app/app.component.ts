import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'bbd-mfe-new-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'dashboard';
  links: string[] = [];
  activeLink = '';

  constructor(private router: Router) {
    for (const configItem of router.config) {
      if (configItem.path && configItem.path !== "") {
        this.links.push(configItem.path);
      }
    }
    this.activeLink = this.links[0];
  }

  navigateToLink(link: string) {
    this.activeLink = link;
    this.router.navigateByUrl(link);
  }
}
