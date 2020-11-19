import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerifyPasswordComponent } from './verify-password.component';

const routes: Routes = [{ path: '', component: VerifyPasswordComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerifyPasswordRoutingModule { }
