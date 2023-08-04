import {
  AfterContentInit,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuUtils } from '../../utils/menu-utils';

@Component({
  template: '<div #vc></div> <div *ngIf="showConstruction"> Page is under construction </div>',
})
export class WrapperComponent implements AfterContentInit {
  @ViewChild('vc', { read: ElementRef, static: true })
  vc: ElementRef | undefined;

  showConstruction = false;

  constructor(private route: ActivatedRoute, private menuUtils: MenuUtils) {}

  ngAfterContentInit(): void {
    const elementName = this.route.snapshot.data['elementName'];
    const importName = this.route.snapshot.data['importName'];
    console.log('elementName', elementName);

    const importFn = this.menuUtils.registry[importName];
    importFn()
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .then((_: any) => {
        const element = document.createElement(elementName);
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        this.vc!.nativeElement.appendChild(element);
      })
      .catch((err: any) => this.showConstruction = true);
  }
}
