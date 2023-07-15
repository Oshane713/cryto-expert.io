import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-crypto-wallet',
  templateUrl: './crypto-wallet.component.html',
  styleUrls: ['./crypto-wallet.component.css']
})
export class CryptoWalletComponent {
  
  bitcoinBalance: number = 0;
  usdValue!: number;

  constructor(
    private cookieService: CookieService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    // Load wallet data from cookies
    this.loadWalletFromCookies();
  }

  addBitcoin() {
    this.bitcoinBalance += 1;
    // Update the USD value based on the current Bitcoin price
    this.updateUsdValue();
    // Save wallet data to cookies
    this.saveWalletToCookies();
  }

  removeBitcoin() {
    if (this.bitcoinBalance > 0) {
      this.bitcoinBalance -= 1;
      // Update the USD value based on the current Bitcoin price
      this.updateUsdValue();
      // Save wallet data to cookies
      this.saveWalletToCookies();
    }
  }

  updateUsdValue() {
    this.http.get<any>('https://api.coincap.io/v2/assets/bitcoin').subscribe(response => {
      this.usdValue = response.data.priceUsd * this.bitcoinBalance;
    });
  }

  saveWalletToCookies() {
    // Save the wallet data to cookies
    this.cookieService.set('bitcoinBalance', this.bitcoinBalance.toString());
    this.cookieService.set('usdValue', this.usdValue.toString());
  }

  loadWalletFromCookies() {
    // Load the wallet data from cookies
    const bitcoinBalance = this.cookieService.get('bitcoinBalance');
    const usdValue = this.cookieService.get('usdValue');

    if (bitcoinBalance && usdValue) {
      this.bitcoinBalance = parseFloat(bitcoinBalance);
      this.usdValue = parseFloat(usdValue);
    }
  }
  
}
