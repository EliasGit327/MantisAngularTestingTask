import { Injectable } from '@angular/core';
import { SideNavOptions } from './classes/side-nav-options';
import { MatDrawer } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class SideNavService {
  public sideNavOptions = new SideNavOptions();
  public drawer: MatDrawer;

  constructor(
  ) {
  }

}
