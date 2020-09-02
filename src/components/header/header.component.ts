import { Component, Input, OnInit } from '@angular/core';
import { SideNavService } from '../../services/side-nav-service/side-nav.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { AuthService } from '../../services/auth-service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() title: string;

  constructor(
    private sideNavService: SideNavService,
  ) { }

  ngOnInit(): void {
  }

  toggleSideNav(): void {
    this.sideNavService.drawer.toggle();
  }

}
