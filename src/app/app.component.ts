import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { SideNavOptions } from '../services/side-nav-service/classes/side-nav-options';
import { SideNavService } from '../services/side-nav-service/side-nav.service';
import { ThemeService } from '../services/theme-service/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('drawer') drawer: MatDrawer;
  title = 'MantisAngularTestingTask';

  sideNavOptions: SideNavOptions;

  constructor(
    private sideNavService: SideNavService,
    public themeService: ThemeService,
  ) {
    this.sideNavOptions = this.sideNavService.sideNavOptions;
  }

  ngAfterViewInit(): void {
    this.sideNavService.drawer = this.drawer;
  }
}
