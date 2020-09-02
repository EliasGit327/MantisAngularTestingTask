import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './guest-level/home-page/home-page.component';
import { NotFoundPageComponent } from './guest-level/not-found-page/not-found-page.component';
import { MaterialModule } from '../modules/material.module';
import { TagsPageComponent } from './auth-level/tags-page/tags-page.component';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    HomePageComponent,
    NotFoundPageComponent,
    TagsPageComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatFormFieldModule
  ],
  exports: [
    HomePageComponent,
    NotFoundPageComponent,
  ]
})

export class PagesModule { }
