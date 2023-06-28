import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditLicorPage } from './edit-licor.page';

const routes: Routes = [
  {
    path: '',
    component: EditLicorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditLicorPageRoutingModule {}
