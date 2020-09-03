import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './guest-level/home-page/home-page.component';
import { NotFoundPageComponent } from './guest-level/not-found-page/not-found-page.component';

const routes: Routes = [
  { path: 'dashboard', loadChildren: () => import('./auth-level/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'request', loadChildren: () => import('./auth-level/request/request.module').then(m => m.RequestModule) },
  { path: 'tags', loadChildren: () => import('./auth-level/tags/tags.module').then(m => m.TagsModule) },
  { path: 'home', component: HomePageComponent },
  { path: 'not-found', component: NotFoundPageComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'not-found' }, ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ],
  exports: [
    RouterModule
  ]
})

export class PagesRoutingModule {}
