import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/cl-dashboard', pathMatch: 'full' },
  { path: 'cl-dashboard', loadChildren: () => import('./dashboard-module/dashboard-module.module').then(m => m.DashboardModule) },
  { path: 'cl-heroes', loadChildren: () => import('./heroes-module/heroes-module.module').then(m => m.HeroesModule) }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
