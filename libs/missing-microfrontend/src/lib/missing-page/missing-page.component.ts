import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'bbd-mfe-new-missing-page',
  templateUrl: './missing-page.component.html',
  styleUrls: ['./missing-page.component.scss'],
})
export class MissingPageComponent {
  retryRoute = this.route.snapshot.queryParams['path'];
  constructor(private route: ActivatedRoute) {
    console.log(this.route);
  }
}
