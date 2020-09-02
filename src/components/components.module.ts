import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ThemePickerComponent } from './header/components/theme-picker/theme-picker.component';
import { MaterialModule } from '../modules/material.module';

@NgModule({
  declarations: [
    ThemePickerComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ThemePickerComponent,
    HeaderComponent,
  ]
})
export class ComponentsModule { }
