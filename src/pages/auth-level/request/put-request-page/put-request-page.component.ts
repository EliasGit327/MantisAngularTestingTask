import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-put-request-page',
  templateUrl: './put-request-page.component.html',
  styleUrls: ['./put-request-page.component.css']
})
export class PutRequestPageComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  putBtnClick(): void {
    this.http.put('some-url', {}).subscribe(() => {}, () => {});
  }
}
