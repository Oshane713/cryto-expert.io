import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CryptoCardChartComponent } from '../crypto-card-chart/crypto-card-chart.component';


@Component({
  selector: 'app-crypto-card',
  templateUrl: './crypto-card.component.html',
  styleUrls: ['./crypto-card.component.css']
})
export class CryptoCardComponent {
  @Input() coin: any;

  constructor(private dialog: MatDialog) {}

  openChartDialog(cryptoId: string){
    const dialogRef = this.dialog.open(CryptoCardChartComponent,{
      width : '900px',
      data: {cryptoId: cryptoId}
    })
  }
}
