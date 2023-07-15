import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import {HttpClientModule} from '@angular/common/http';
import { Chart, registerables } from 'chart.js';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';
import { HeaderComponent } from './components/header/header.component';
import { CryptoCardComponent } from './components/crypto-card/crypto-card.component';
import { CryptoListComponent } from './components/crypto-list/crypto-list.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { CryptoCardChartComponent } from './components/crypto-card-chart/crypto-card-chart.component';
import { CryptoWalletComponent } from './components/crypto-wallet/crypto-wallet.component';

Chart.register(...registerables);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CryptoCardComponent,
    SearchFilterComponent,
    CryptoListComponent,
    CryptoCardChartComponent,
    CryptoWalletComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    HttpClientModule,
    MatSelectModule,
    MatDialogModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
