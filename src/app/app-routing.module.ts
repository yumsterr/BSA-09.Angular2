import { RootComponent } from './root/root.component';
import { AuthGuard } from './guards/auth.guard';
import { UsersListComponent } from './cabinet/users-list/users-list.component';
import { EditComponent } from './cabinet/edit/edit.component';
import { ChangePasswordComponent } from './auth/change-password/change-password.component';
import { ProfileComponent } from './cabinet/profile/profile.component';
import { ForgotPassComponent } from './auth/forgot-pass/forgot-pass.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: RootComponent,
    children: []
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'forgotpassword',
    component: ForgotPassComponent,
    canActivate: [AuthGuard],
    children:[
      {
        path: 'change',
        component: ChangePasswordComponent,
      }
    ]
  },
  {
    path: 'account',
    component: ProfileComponent,
    children:[
      {
        path: '',
        component: EditComponent,
      },
      {
        path: 'users',
        component: UsersListComponent,
      },
    ]
  },
  { path: 'timer', loadChildren: 'app/timer/timer.module#TimerModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
