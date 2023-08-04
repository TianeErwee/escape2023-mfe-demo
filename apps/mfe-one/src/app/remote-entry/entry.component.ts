import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'bbd-mfe-demo-mfe-one-entry',
  template: `<div class="remote-entry">
    <p>{{userDetails}}</p>
  </div>`,
  styles: [
    `
      .remote-entry {
        background-color: #143055;
        color: white;
        padding: 5px;
      }
    `,
  ],
})
export class RemoteEntryComponent {

  public userDetails: any;
  constructor(private oAuthService: OAuthService){
    this.getUserDetails();
  }

  async getUserDetails() {
    this.userDetails = await this.oAuthService.loadUserProfile();
    console.log(this.userDetails);
  }


}
