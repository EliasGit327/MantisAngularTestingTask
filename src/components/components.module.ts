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
import { DataByIpWidgetComponent } from './widgets/data-by-ip/data-by-ip-widget.component';
import { CurrencyWidgetComponent } from './widgets/currency-widget/currency-widget.component';
import { UsersWidgetComponent } from './widgets/users-widget/users-widget.component';

@NgModule({
  declarations: [
    ThemePickerComponent,
    HeaderComponent,
    SidebarComponent,
    LoginDialogComponent,
    LoginMenuComponent,
    DataByIpWidgetComponent,
    CurrencyWidgetComponent,
    UsersWidgetComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
  ],
  exports: [
    ThemePickerComponent,
    HeaderComponent,
    SidebarComponent,
    DataByIpWidgetComponent,
    CurrencyWidgetComponent,
    UsersWidgetComponent,
  ],
  entryComponents: [
    LoginDialogComponent
  ]
})
export class ComponentsModule { }
