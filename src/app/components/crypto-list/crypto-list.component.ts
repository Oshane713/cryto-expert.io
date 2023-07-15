import { Component } from '@angular/core';
import { CryptoService } from 'src/app/services/crypto.service';
import { Coin } from 'src/app/coin';

@Component({
  selector: 'app-crypto-list',
  templateUrl: './crypto-list.component.html',
  styleUrls: ['./crypto-list.component.css']
})
export class CryptoListComponent {
  coins: Coin[] = []
  filteredCoins: Coin[] = [];
 

  constructor(private cryptoService: CryptoService) { }

  ngOnInit() {
    this.loadCoins()
  }

  loadCoins(){
    this.cryptoService.getCoins().subscribe(
      (coindata) => {
       this.coins = coindata.data
       this.filteredCoins = [...this.coins]
      }
     )
  }

  applyFilter(selectedCoins: string | string[] | undefined) {
    if (selectedCoins && selectedCoins !== 'showAll') {
      // Convert single selection to an array
      const selectedCoinArray = Array.isArray(selectedCoins) ? selectedCoins : [selectedCoins];
      this.filteredCoins = this.coins.filter(coin => selectedCoinArray.includes(coin.id));
    } else {
      this.filteredCoins = [...this.coins]; // If "Show All" option selected or no coins selected, display all coins
    }
  }
  

}
