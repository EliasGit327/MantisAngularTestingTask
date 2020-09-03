import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatListOption } from '@angular/material/list';
import { ILink } from './interfaces/ilink';
import { AuthService } from '../../services/auth-service/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  links: ILink[] = [
    { label: 'Home', route: '/home', iconName: 'home'},
  ];
  loggedInLinks: ILink[] = [
    { label: 'Tags', route: '/tags', iconName: 'label' },
    { label: 'Request Testing', route: '/request', iconName: 'link' }
  ];
  currentLink: ILink;
  set selectedLink(value: ILink) {
    this.currentLink = value;
    this.router.navigate([ value[0].route ]);
  }
  get selectedLink(): ILink {
    return this.currentLink;
  }

  constructor(
    public authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goToRoute(route: MatListOption[]): void {
    console.warn(route);
    // this.router.navigate([route]);
  }
}
