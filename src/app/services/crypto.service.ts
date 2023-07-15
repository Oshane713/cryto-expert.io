import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coin } from '../coin';

const API_BASE_URL = 'https://api.coincap.io/v2/'

type CoinsResponse = {
  data: Array<Coin>,
  timestamp: number
}

type PriceResponse = {
  data: {
    priceUsd: number;
  };
}

@Injectable({
  providedIn: 'root'
})


export class CryptoService {

  constructor(private http: HttpClient) { 

  }
 
  getCoins() {
    return this.http.get<CoinsResponse>(`https://api.coincap.io/v2/assets/?limit=10`);
  }

  getPriceData(id: string){
    return this.http.get(`https://api.coincap.io/v2/assets/${id}/history?interval=d1`)
  }

  getPrice(id: string){
    return this.http.get<PriceResponse>(`https://api.coincap.io/v2/assets/${id}`)
  }
}