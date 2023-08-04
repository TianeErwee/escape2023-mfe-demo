import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

import { RemoteEntryComponent } from './entry.component';
import { ProfileComponent } from '../profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [RemoteEntryComponent, ProfileComponent],
  imports: [
    MatButtonModule,
    CommonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDividerModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProfileComponent
      },
    ]),
  ],
  exports: [RemoteEntryComponent],
})
export class RemoteEntryModule {}
