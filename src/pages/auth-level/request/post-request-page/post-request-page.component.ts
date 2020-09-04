import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post-request-page',
  templateUrl: './post-request-page.component.html',
  styleUrls: ['./post-request-page.component.css']
})
export class PostRequestPageComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  postBtnClick(): void {
    this.http.post('some-url', {}).subscribe(() => {}, () => {});
  }
}
