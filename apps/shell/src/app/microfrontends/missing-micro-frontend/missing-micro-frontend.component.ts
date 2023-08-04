import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-missing-micro-frontend',
  templateUrl: './missing-micro-frontend.component.html',
  styleUrls: ['./missing-micro-frontend.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MissingMicroFrontendComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
