import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Coin } from 'src/app/coin';



@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})

export class SearchFilterComponent implements OnInit{
  @Output() filterChanged = new EventEmitter<string | string[]>();
  @Input() coins: Coin[] = []; // Define the coins array similar to CryptoListComponent
  selectedCoins: string[] = []; // Holds the selected cryptocurrency

  

  constructor() { }

  ngOnInit() {
  }

  applyFilter() {
    if (this.selectedCoins.includes('showAll')) {
      this.filterChanged.emit(undefined); // Emit undefined to indicate "Show All" option
    } else {
      this.filterChanged.emit(this.selectedCoins); // Emit the selected coin values
    }
  }
}
