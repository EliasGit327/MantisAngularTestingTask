import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-delete-request-page',
  templateUrl: './delete-request-page.component.html',
  styleUrls: ['./delete-request-page.component.css']
})
export class DeleteRequestPageComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  deleteBtnClick(): void {
    this.http.delete('some-url').subscribe(() => {}, () => {});
  }
}
