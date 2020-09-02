import { Component, OnChanges, OnInit } from '@angular/core';
import { ThemeService } from '../../../../services/theme-service/theme.service';
import { ITheme } from '../../../../services/theme-service/interfaces/itheme';

@Component({
  selector: 'app-theme-picker',
  templateUrl: './theme-picker.component.html',
})
export class ThemePickerComponent implements OnInit, OnChanges {
  options = this.themeService.themes;

  constructor(
    public themeService: ThemeService,
  ) {}

  ngOnInit(): void {
  }

  setTheme(themeToSet: ITheme): void {
    this.themeService.setTheme(themeToSet.className);
  }

  ngOnChanges(): void {
  }
}
