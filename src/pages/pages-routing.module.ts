import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './any-level/home-page/home-page.component';
import { NotFoundPageComponent } from './any-level/not-found-page/not-found-page.component';
import { TagsPageComponent } from './admin-level/tags-page/tags-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'not-found', component: NotFoundPageComponent },
  { path: 'tags', component: TagsPageComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'not-found', }
];

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

export class PagesRoutingModule { }
