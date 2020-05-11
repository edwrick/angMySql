import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './comps/login/login.component'
import {UsersComponent} from './comps/users/users.component'
import { NewuserComponent } from './comps/newuser/newuser.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'users/:id',
    canActivate: [AuthGuard],
    component: UsersComponent
  },
  {
    path:'newU',
    canActivate: [AuthGuard],
    component: NewuserComponent
  },
  {
    path:'edit/:id',
    canActivate: [AuthGuard],
    component: NewuserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
