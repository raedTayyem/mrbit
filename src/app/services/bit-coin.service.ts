import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BitCoinService {
  result: any;

  constructor(private httpClient: HttpClient) {}

  getPrices() {
    return this.httpClient
      .get(
        'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC&tsyms=USD'
      )
      .pipe(map((result) => (this.result = result)));
  }
  getMarketChart() {
    return this.httpClient
      .get(
        'http://api.bitcoincharts.com/v1/trades.csv?symbol=krakenEUR&start=1303100000'
      )
      .pipe(map((result) => (this.result = result)));
  }
}
