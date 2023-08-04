import { Component, ViewEncapsulation } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'bbd-mfe-demo-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent {
  constructor(private oAuthService: OAuthService) {}

  public login(): void {
    this.oAuthService.initLoginFlow();
  }
}
