import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';

interface IData {
  page: 2;
  per_page: 6;
  total: number;
  total_pages: number;
  data: {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  }[];
}

@Component({
  selector: 'app-users-widget',
  templateUrl: './users-widget.component.html',
  styleUrls: ['./users-widget.component.css']
})
export class UsersWidgetComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  isLoading = false;
  displayedColumns: string[] = ['id', 'first_name', 'last_name', 'email'];
  dataSource = new MatTableDataSource<any>([]);
  page = 1;

  constructor(
    private http: HttpClient
  ) {}

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.getData(1);
  }

  getData(page: number): void {
    this.isLoading = true;
    this.http.get(`https://reqres.in/api/users?page=${page}`)
      .subscribe((response: IData) => {
        this.dataSource = new MatTableDataSource<any>(response.data);
        this.isLoading = false;
      }, (error) => this.isLoading = false);
  }

  previousPageBtnClick(): void {
    this.page = this.page - 1;
    this.getData(this.page);
  }

  nextPageBtnClick(): void {
    this.page = this.page + 1;
    this.getData(this.page);
  }

  selectTrigger($event: any): void {

  }
}
