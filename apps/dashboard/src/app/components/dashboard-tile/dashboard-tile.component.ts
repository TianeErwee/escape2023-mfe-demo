import {
  AfterViewInit,
  Component,
  Input,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { DashboardTileMicrofrontend } from '@bbd-mfe-new/models';

@Component({
  selector: 'bbd-mfe-new-dashboard-tile',
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
      console.log('REF',ref);
      this.pageState = 'loaded';
    } catch (err) {
      console.error('ERR',err);
      this.pageState = 'error';
    }
  }
}
