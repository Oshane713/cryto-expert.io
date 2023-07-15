import { Component} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CryptoWalletComponent } from '../crypto-wallet/crypto-wallet.component';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})



export class HeaderComponent {

  constructor(private dialog: MatDialog) {}

  openWalletDialog(){
    const dialogRef = this.dialog.open(CryptoWalletComponent,{
      width : '500px',
    })
  }

}
