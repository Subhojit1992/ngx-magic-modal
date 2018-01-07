import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MagicModalComponent } from './magic-modal.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MagicModalComponent],
  exports: [
    MagicModalComponent // <-- this!
  ]
})
export class MagicModalModule { }
