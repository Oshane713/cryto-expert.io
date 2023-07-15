import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CryptoService } from 'src/app/services/crypto.service';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-crypto-card-chart',
  templateUrl: './crypto-card-chart.component.html',
  styleUrls: ['./crypto-card-chart.component.css']
})
export class CryptoCardChartComponent implements OnInit{
  cryptoId!: string;
  priceData: any;
  lineChart!: Chart;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, 
  private cryptoService : CryptoService ) {}

  ngOnInit(): void {
    this.cryptoId = this.data.cryptoId
    this.chartData()
  }

  chartData (){
    this.cryptoService.getPriceData(this.cryptoId).subscribe(
      (data) => {
        this.priceData = data
        this.createLineChart()
      }
    )
  }
  
  createLineChart() {
    const chartData = this.priceData.data.slice(-10); // Get the last 10 days of data
    console.log(this.chartData)
    const dates = chartData.map((item: any) => item.date.split('T')[0]);
    const prices = chartData.map((item: any) => parseFloat(item.priceUsd));

    this.lineChart = new Chart('lineChart', {
      type: 'line',
      data: {
        labels: dates,
        datasets: [
          {
            label: 'Prices',
            data: prices,
            borderColor: '#3e95cd',
            fill: false
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }

}
