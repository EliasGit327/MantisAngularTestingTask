import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface IData {
  ip: string;
  country_code: string;
  country_name: string;
  region_code: string;
  region_name: string;
  city: string;
  zip_code: string;
  time_zone: string;
  latitude: number;
  longitude: number;
  metro_code: number;
}

@Component({
  selector: 'app-data-by-ip-widget',
  templateUrl: './data-by-ip-widget.component.html',
  styleUrls: ['./data-by-ip-widget.component.css']
})
export class DataByIpWidgetComponent implements OnInit {
  data: IData;
  isLoading = false;

  constructor(
    private http: HttpClient
  ) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.http.get('https://freegeoip.app/json/').subscribe((response: IData) => {
        this.data = response;
        this.isLoading = false;
    }, (error) => this.isLoading = false );
  }

}
