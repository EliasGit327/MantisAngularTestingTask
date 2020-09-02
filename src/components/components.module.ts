import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ThemePickerComponent } from './header/components/theme-picker/theme-picker.component';
import { MaterialModule } from '../modules/material.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ThemePickerComponent,
    HeaderComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    ThemePickerComponent,
    HeaderComponent,
    SidebarComponent,
  ]
})
export class ComponentsModule { }
