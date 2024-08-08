import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { AuthRouterModule } from './auth-routing.module';
import { GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRouterModule,
    GoogleSigninButtonModule,
    MatCardModule,
  ]
})
export class AuthModule { }
