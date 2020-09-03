import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginActivateGuard } from '../../login-activate.guard';
import { AllRequestPageComponent } from './all-requests/all-request-page.component';
import { GetRequestPageComponent } from './get-request-page/get-request-page.component';
import { PostRequestPageComponent } from './post-request-page/post-request-page.component';
import { PutRequestPageComponent } from './put-request-page/put-request-page.component';
import { DeleteRequestPageComponent } from './delete-request-page/delete-request-page.component';

const routes: Routes = [
  { path: '', component: AllRequestPageComponent, canActivate: [LoginActivateGuard] },
  { path: 'get', component: GetRequestPageComponent, canActivate: [LoginActivateGuard] },
  { path: 'post', component: PostRequestPageComponent, canActivate: [LoginActivateGuard] },
  { path: 'update', component: PutRequestPageComponent, canActivate: [LoginActivateGuard] },
  { path: 'delete', component: DeleteRequestPageComponent, canActivate: [LoginActivateGuard] },
];

@NgModule({
  declarations: [DeleteRequestPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RequestModule { }
