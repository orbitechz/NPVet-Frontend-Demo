import { NgModule } from '@angular/core';

import { BootstrapIconsModule } from 'ng-bootstrap-icons';
import { ArrowClockwise, PenFill, TrashFill } from 'ng-bootstrap-icons/icons';

const icons = {
  TrashFill,
  PenFill,
  ArrowClockwise
};

@NgModule({
  imports: [
    BootstrapIconsModule.pick(icons)
  ],
  exports: [
    BootstrapIconsModule
  ]
})
export class IconsModule { }