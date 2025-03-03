import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopupsRoutingModule } from './popups-routing.module';
import { PopupshomeComponent } from './popupshome/popupshome.component';
import { ModalComponent } from './modal/modal.component';

import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PopupshomeComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    PopupsRoutingModule,
    SharedModule
  ]
})
export class PopupsModule { }
