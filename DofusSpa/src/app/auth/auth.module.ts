import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth.routing';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AuthComponent } from './auth.component';


@NgModule({
  declarations: [
      ForgotPasswordComponent,
      LoginComponent,
      RegisterComponent,
      ResetPasswordComponent,
      AuthComponent
   ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  providers: [
  ]
})
export class AuthModule { }
