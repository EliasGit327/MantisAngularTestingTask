import { SidenavMode } from '../types/sidenav-mode';

export class SideNavOptions {
  mode: SidenavMode;
  hasBackdrop: boolean;

  constructor() {
    this.mode = 'side';
    this.hasBackdrop = false;
  }
}
