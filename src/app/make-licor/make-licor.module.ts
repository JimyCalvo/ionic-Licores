import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MakeLicorPageRoutingModule } from './make-licor-routing.module';

import { MakeLicorPage } from './make-licor.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    MakeLicorPageRoutingModule
  ],
  declarations: [MakeLicorPage]
})
export class MakeLicorPageModule {}
