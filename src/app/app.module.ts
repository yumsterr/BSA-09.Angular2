import { AuthGuard } from './guards/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { DataSource, CdkTableModule } from '@angular/cdk';

import 'hammerjs';

import { MaterialModule, MdDatepickerModule, MdNativeDateModule, MdButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { ForgotPassComponent } from './auth/forgot-pass/forgot-pass.component';
import { ProfileComponent } from './cabinet/profile/profile.component';
import { ChangePasswordComponent } from './auth/change-password/change-password.component';
import { EditComponent } from './cabinet/edit/edit.component';
import { UsersListComponent } from './cabinet/users-list/users-list.component';
import { SearchUsersPipe } from './pipes/search-users.pipe';
import { RootComponent } from './root/root.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ForgotPassComponent,
    ProfileComponent,
    ChangePasswordComponent,
    EditComponent,
    UsersListComponent,
    SearchUsersPipe,
    RootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdButtonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CdkTableModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
