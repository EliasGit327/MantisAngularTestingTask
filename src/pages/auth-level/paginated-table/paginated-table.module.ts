import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PaginatedTablePageComponent } from './paginated-table-page/paginated-table-page.component';
import { LoginActivateGuard } from '../../login-activate.guard';
import { PaginatedTableComponent } from './paginated-table-page/components/paginated-table/paginated-table.component';
import { MaterialModule } from '../../../modules/material.module';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: PaginatedTablePageComponent, canActivate: [LoginActivateGuard] },
];

@NgModule({
  declarations: [PaginatedTableComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule
  ],
  exports: [
    PaginatedTableComponent
  ]
})
export class PaginatedTableModule { }
