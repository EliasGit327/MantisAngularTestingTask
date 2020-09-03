import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-request-page',
  templateUrl: './all-request-page.component.html',
  styleUrls: ['./all-request-page.component.css']
})
export class AllRequestPageComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigateToRequestPage(route: string): void {
    this.router.navigate(['request', route]);
  }
}
