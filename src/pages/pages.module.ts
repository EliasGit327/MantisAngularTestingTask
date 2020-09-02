import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './any-level/home-page/home-page.component';
import { NotFoundPageComponent } from './any-level/not-found-page/not-found-page.component';
import { MaterialModule } from '../modules/material.module';
import { TagsPageComponent } from './admin-level/tags-page/tags-page.component';

@NgModule({
  declarations: [
    HomePageComponent,
    NotFoundPageComponent,
    TagsPageComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    HomePageComponent,
    NotFoundPageComponent,
  ]
})

export class PagesModule { }
