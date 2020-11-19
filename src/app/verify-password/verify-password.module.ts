import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerifyPasswordRoutingModule } from './verify-password-routing.module';
import { VerifyPasswordComponent } from './verify-password.component';


@NgModule({
  declarations: [VerifyPasswordComponent],
  imports: [
    CommonModule,
    VerifyPasswordRoutingModule
  ]
})
export class VerifyPasswordModule { }
