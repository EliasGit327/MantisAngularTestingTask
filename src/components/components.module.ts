import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ThemePickerComponent } from './header/components/theme-picker/theme-picker.component';
import { MaterialModule } from '../modules/material.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { LoginMenuComponent } from './header/components/login-menu/login-menu.component';

@NgModule({
  declarations: [
    ThemePickerComponent,
    HeaderComponent,
    SidebarComponent,
    LoginDialogComponent,
    LoginMenuComponent,
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
  ],
  entryComponents: [
    LoginDialogComponent
  ]
})
export class ComponentsModule { }
