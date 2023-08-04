import {
  AfterViewInit,
  Component,
  Input,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { DashboardTileMicrofrontend } from '@bbd-mfe-new/models';

@Component({
  selector: 'bbd-mfe-new-dashboard-tile',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonModule,
  ],
  templateUrl: './dashboard-tile.component.html',
  styleUrls: ['./dashboard-tile.component.scss'],
})
export class DashboardTileComponent implements AfterViewInit {
  @Input() mfe!: DashboardTileMicrofrontend;
  @ViewChild('placeHolder', { read: ViewContainerRef })
  viewContainer!: ViewContainerRef;
  pageState: 'loading' | 'loaded' | 'error' = 'loading';

  constructor(private router: Router, private route: ActivatedRoute) {}
  ngAfterViewInit(): void {
    this.loadAndAttach();
  }

  async loadAndAttach() {
    this.pageState = 'loading';
    try {
      const m = await loadRemoteModule({
        remoteEntry: this.mfe.remoteEntry,
        remoteName: this.mfe.remoteName,
        exposedModule: this.mfe.exposedModule,
      });
      const ref = this.viewContainer.createComponent(m[this.mfe.ngModuleName]);
      this.pageState = 'loaded';
    } catch (err) {
      console.error(err);
      this.pageState = 'error';
    }
  }
}
