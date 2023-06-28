import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakeLicorPage } from './make-licor.page';

const routes: Routes = [
  {
    path: '',
    component: MakeLicorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MakeLicorPageRoutingModule {}
