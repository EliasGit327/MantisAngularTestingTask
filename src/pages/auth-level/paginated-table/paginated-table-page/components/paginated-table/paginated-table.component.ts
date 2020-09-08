import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

const colors: string[] = [
  'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
  'aqua', 'blue', 'navy', 'black', 'gray'
];
const names: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

@Component({
  selector: 'app-paginated-table',
  templateUrl: './paginated-table.component.html',
  styleUrls: ['./paginated-table.component.css']
})
export class PaginatedTableComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'progress', 'color'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  idFilter: string;
  nameFilter: string;
  progressFilter: string;
  colorFilter: string;

  users = [];

  constructor() {
    this.users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));

    this.dataSource = new MatTableDataSource(this.users);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(): void {
    let sorted = this.users;

    if (this.idFilter) {
      sorted = sorted.filter((u) => u.id.includes(this.idFilter));
    }
    if (this.nameFilter) {
      sorted = sorted.filter((u) => u.name.includes(this.nameFilter));
    }
    if (this.progressFilter) {
      sorted = sorted.filter((u) => u.progress.includes(this.progressFilter));
    }
    if (this.colorFilter) {
      sorted = sorted.filter((u) => u.color.includes(this.colorFilter));
    }

    this.dataSource = new MatTableDataSource(sorted);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit(): void {
  }
}

function createNewUser(id: number): UserData {
  const name = names[Math.round(Math.random() * (names.length - 1))] + ' ' +
    names[Math.round(Math.random() * (names.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name,
    progress: Math.round(Math.random() * 100).toString(),
    color: colors[Math.round(Math.random() * (colors.length - 1))]
  };
}
