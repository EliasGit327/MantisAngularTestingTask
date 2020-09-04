import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-get-request-page',
  templateUrl: './get-request-page.component.html',
  styleUrls: ['./get-request-page.component.css']
})
export class GetRequestPageComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  getBtnClick(): void {
    this.http.get('jwt-api').subscribe(() => {}, () => {});
  }
}
