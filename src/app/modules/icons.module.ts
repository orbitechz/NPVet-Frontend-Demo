import { NgModule } from '@angular/core';

import { BootstrapIconsModule } from 'ng-bootstrap-icons';
import { PlusLg, PlusCircleFill ,Search, ArrowClockwise, PenFill, TrashFill, Plus } from 'ng-bootstrap-icons/icons';

const icons = {
  TrashFill,
  PenFill,
  ArrowClockwise,
  Search,
  PlusCircleFill,
  PlusLg,
  Plus
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