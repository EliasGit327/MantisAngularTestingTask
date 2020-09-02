import { Injectable } from '@angular/core';
import { ITheme } from './interfaces/itheme';
import { OverlayContainer } from '@angular/cdk/overlay';
import { LocalStorageService } from '../local-storage/local-storage.service';
import themesArray from './themesArray';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  public themes: ITheme[] = themesArray;
  public selectedTheme: string = this.localStorageService.selectedTheme.value ?
    this.localStorageService.selectedTheme.value :
    this.themes[0].className;

  constructor(
    private localStorageService: LocalStorageService,
    private overlayContainer: OverlayContainer
  ) {
    this.setOverlayStyle(this.selectedTheme);
  }

  setTheme(theme: string): void {
    this.setOverlayStyle(theme);
    this.selectedTheme = theme;
    this.localStorageService.selectedTheme.value = theme;
  }

  private setOverlayStyle(theme: string): void {
    const overlayContainerClasses = this.overlayContainer.getContainerElement().classList;
    const themeClassesToRemove = Array.from(overlayContainerClasses).filter((item: string) => item.includes('-theme'));
    if (themeClassesToRemove.length) {
      overlayContainerClasses.remove(...themeClassesToRemove);
    }
    overlayContainerClasses.add(theme);
  }

}
