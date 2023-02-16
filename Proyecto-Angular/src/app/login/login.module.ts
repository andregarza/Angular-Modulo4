import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LoginpageComponent } from './components/loginpage/loginpage.component';



@NgModule({
  declarations: [
    LoginpageComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule
  ],
  exports: [
    LoginpageComponent
  ]
})
export class LoginModule { }
