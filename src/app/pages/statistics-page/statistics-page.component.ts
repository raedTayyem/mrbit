import { Component, OnInit } from '@angular/core';
import { BitCoinService } from 'src/app/services/bit-coin.service';

@Component({
  selector: 'app-statistics-page',
  templateUrl: './statistics-page.component.html',
  styleUrls: ['./statistics-page.component.scss'],
})
export class StatisticsPageComponent implements OnInit {
  objectKeys = Object.keys;
  charts: any;

  constructor(private data: BitCoinService) {}

  ngOnInit(): void {
    this.data.getMarketChart().subscribe((res) => {
      this.charts = res;
    });
  }
}
