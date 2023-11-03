import { NgModule } from '@angular/core';

import { BootstrapIconsModule } from 'ng-bootstrap-icons';
import { Search, ArrowClockwise, PenFill, TrashFill } from 'ng-bootstrap-icons/icons';

const icons = {
  TrashFill,
  PenFill,
  ArrowClockwise,
  Search
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