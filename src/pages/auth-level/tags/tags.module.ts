import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TagsPageComponent } from './tags-page/tags-page.component';
import { LoginActivateGuard } from '../../login-activate.guard';

const routes: Routes = [
  { path: '', component: TagsPageComponent, canActivate: [LoginActivateGuard] },
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
export class TagsModule { }
