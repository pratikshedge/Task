import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
{ path: '', loadChildren: () => import('./home-module/home-module.module').then(x => x.HomeModuleModule)},
{ path: 'register', loadChildren: () => import('./user-register/user-register.module').then(x => x.UserRegisterModule)},
{ path: 'userdata', loadChildren: () => import('./user-data/user-data.module').then(x => x.UserDataModule)}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
