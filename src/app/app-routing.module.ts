import { SessionGuard } from './core/guars/session.guard';
import { HomeComponent } from './modules/home/pages/home/home.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    loadChildren:()=> import('./modules/home/home.module').then(m => m.HomeModule)
    ,canActivate:[SessionGuard]
  },
  {
    path:'auth',
    loadChildren:()=> import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'**',
    component:HomeComponent,
    loadChildren:()=> import('./modules/home/home.module').then(m => m.HomeModule)
    ,canActivate:[SessionGuard]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
