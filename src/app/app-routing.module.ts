import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'make-licor',
    loadChildren: () => import('./make-licor/make-licor.module').then( m => m.MakeLicorPageModule)
  },
  {
    path: 'edit-licor/:id',
    loadChildren: () => import('./edit-licor/edit-licor.module').then( m => m.EditLicorPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
