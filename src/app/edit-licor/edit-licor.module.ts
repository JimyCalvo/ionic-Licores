import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditLicorPageRoutingModule } from './edit-licor-routing.module';

import { EditLicorPage } from './edit-licor.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    EditLicorPageRoutingModule
  ],
  declarations: [EditLicorPage]
})
export class EditLicorPageModule {}
