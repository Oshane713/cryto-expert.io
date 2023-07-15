import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CryptoWalletComponent } from './crypto-wallet.component';

describe('CryptoWalletComponent', () => {
  let component: CryptoWalletComponent;
  let fixture: ComponentFixture<CryptoWalletComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CryptoWalletComponent],
      imports: [HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(CryptoWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.bitcoinBalance).toBe(0);
    expect(component.usdValue).toBeUndefined();
  });
  
  it('should increment bitcoin balance by 1 when adding Bitcoin', () => {
    const initialBitcoinBalance = component.bitcoinBalance;
  
    component.addBitcoin();
  
    expect(component.bitcoinBalance).toBe(initialBitcoinBalance + 1);
  });
  
  it('should not decrement bitcoin balance below 0 when removing Bitcoin', () => {
    component.bitcoinBalance = 0;
  
    component.removeBitcoin();
  
    expect(component.bitcoinBalance).toBe(0);
  });

});
