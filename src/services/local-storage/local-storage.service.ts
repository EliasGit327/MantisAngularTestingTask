import { Injectable } from '@angular/core';
import { LocalStorageValue } from './classes/local-storage-value';
import themesArray from '../theme-service/themesArray';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  public selectedTheme: LocalStorageValue = new LocalStorageValue( {
    key: 'selectedTheme',
    rule: (value) => {
      const searchResult = themesArray.find(t => t.className === value);
      return searchResult !== null && searchResult !== undefined;
    }
  });


  constructor() {}
}
