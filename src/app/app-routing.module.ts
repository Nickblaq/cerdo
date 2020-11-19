import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'how-it-works', loadChildren: () => import('./how-it-works/how-it-works.module').then(m => m.HowItWorksModule) },
  { path: 'accounts', loadChildren: () => import('./accounts/accounts.module').then(m => m.AccountsModule) },
  { path: 'about-us', loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsModule) },
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  { path: 'signup', loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule) },
  { path: 'signin', loadChildren: () => import('./signin/signin.module').then(m => m.SigninModule) },
  { path: 'logout', loadChildren: () => import('./logout/logout.module').then(m => m.LogoutModule) },
  { path: 'verify-password', loadChildren: () => import('./verify-password/verify-password.module').then(m => m.VerifyPasswordModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  CommonModule
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
