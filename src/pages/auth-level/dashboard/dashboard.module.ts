import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginActivateGuard } from '../../login-activate.guard';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';


const routes: Routes = [
  { path: '', component: DashboardPageComponent, canActivate: [LoginActivateGuard] },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardModule { }
