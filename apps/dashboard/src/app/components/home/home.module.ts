import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ListViewComponent,
  RebrickableModule,
  SearchComponent,
  SetTableComponent,
} from '@bbd-mfe-new/rebrickable';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { LegoFacadeService, LegoState } from '@bbd-mfe-new/store';
import { NgxsModule } from '@ngxs/store';
import { HomeComponent } from './home.component';
import { DashboardTileComponent } from '../dashboard-tile/dashboard-tile.component';
import { HomeRoutingModule } from './home-routing.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [HomeComponent, DashboardTileComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RebrickableModule,
    SetTableComponent,
    HttpClientModule,
    SearchComponent,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ListViewComponent,
    MatDialogModule,
    MatCardModule,
    MatProgressSpinnerModule,
    NgxsModule.forFeature([LegoState]),
  ],
  providers: [LegoFacadeService],
})
export class HomeModule {}
