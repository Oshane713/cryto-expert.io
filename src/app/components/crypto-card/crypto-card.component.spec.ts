import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { CryptoCardComponent } from './crypto-card.component';

describe('CryptoCardComponent', () => {
  let component: CryptoCardComponent;
  let fixture: ComponentFixture<CryptoCardComponent>;
  let dialog: MatDialog;


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CryptoCardComponent],
      imports: [MatDialogModule],
      providers: [
        { provide: MatDialog, useValue: {} } 
      ]
    });
    fixture = TestBed.createComponent(CryptoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open the CryptoCardChartComponent dialog with the correct data', () => {
    const cryptoId = 'BTC';
    const dialogSpy = spyOn(dialog, 'open').and.callThrough();
  
    component.openChartDialog(cryptoId);
    
    expect(dialogSpy).toHaveBeenCalledWith(CryptoCardComponent, {
      width: '900px',
      data: { cryptoId: cryptoId }
    });
  });
});
