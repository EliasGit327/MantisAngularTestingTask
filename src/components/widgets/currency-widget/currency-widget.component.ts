import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

interface IData {
  base: string;
  date: Date;
  rates: {
    'CAD': number;
    'HKD': number;
    'ISK': number;
    'PHP': number;
    'DKK': number;
    'HUF': number;
    'CZK': number;
    'GBP': number;
    'RON': number;
    'SEK': number;
    'IDR': number;
    'INR': number;
    'BRL': number;
    'RUB': number;
    'HRK': number;
    'JPY': number;
    'THB': number;
    'CHF': number;
    'EUR': number;
    'MYR': number;
    'BGN': number;
    'TRY': number;
    'CNY': number;
    'NOK': number;
    'NZD': number;
    'ZAR': number;
    'USD': number;
    'MXN': number;
    'SGD': number;
    'AUD': number;
    'ILS': number;
    'KRW': number;
    'PLN': number;
  };
}

@Component({
  selector: 'app-currency-widget',
  templateUrl: './currency-widget.component.html',
  styleUrls: ['./currency-widget.component.css']
})
export class CurrencyWidgetComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort: MatSort;

  data: IData;
  currencyList = new MatTableDataSource([]);
  isLoading = false;
  selectedCurrency = 'USD';

  displayedColumns = ['name', 'value'];

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getData(this.selectedCurrency);
  }

  ngAfterViewInit(): void {
    this.currencyList.sort = this.sort;
  }

  getData(currency: string): void {
    this.isLoading = true;
    this.http.get(`https://api.exchangeratesapi.io/latest?base=${currency}`)
      .subscribe((response: IData) => {
        this.data = response;
        const array = [];
        const parsedRates = (Object.entries(response.rates));
        parsedRates.forEach(([name, value]) => {
          array.push({ name, value });
        });
        this.currencyList = new MatTableDataSource(array);
        this.isLoading = false;
      }, (error) => this.isLoading = false);
  }

  selectTrigger($event): void {
    this.http.get(`https://api.exchangeratesapi.io/latest?base=${$event}`)
      .subscribe((response: IData) => {
        this.data = response;
        const array = [];
        const parsedRates = (Object.entries(response.rates));
        parsedRates.forEach(([name, value]) => {
          array.push({ name, value });
        });
        this.currencyList = new MatTableDataSource(array);
      }, (error) => {});
  }
}
