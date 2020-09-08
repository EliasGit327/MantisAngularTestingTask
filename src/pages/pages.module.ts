import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './guest-level/home-page/home-page.component';
import { NotFoundPageComponent } from './guest-level/not-found-page/not-found-page.component';
import { MaterialModule } from '../modules/material.module';
import { TagsPageComponent } from './auth-level/tags/tags-page/tags-page.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AllRequestPageComponent } from './auth-level/request/all-requests/all-request-page.component';
import { GetRequestPageComponent } from './auth-level/request/get-request-page/get-request-page.component';
import { PostRequestPageComponent } from './auth-level/request/post-request-page/post-request-page.component';
import { PutRequestPageComponent } from './auth-level/request/put-request-page/put-request-page.component';
import { DashboardPageComponent } from './auth-level/dashboard/dashboard-page/dashboard-page.component';
import { ComponentsModule } from '../components/components.module';
import { PaginatedTablePageComponent } from './auth-level/paginated-table/paginated-table-page/paginated-table-page.component';
import { PaginatedTableModule } from './auth-level/paginated-table/paginated-table.module';

@NgModule({
  declarations: [
    HomePageComponent,
    NotFoundPageComponent,
    TagsPageComponent,
    AllRequestPageComponent,
    GetRequestPageComponent,
    PostRequestPageComponent,
    PutRequestPageComponent,
    DashboardPageComponent,
    PaginatedTablePageComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatFormFieldModule,
    ComponentsModule,
    PaginatedTableModule
  ],
  exports: [
    HomePageComponent,
    NotFoundPageComponent,
  ]
})

export class PagesModule { }
