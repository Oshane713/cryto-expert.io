import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CryptoCardChartComponent } from './crypto-card-chart.component';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CryptoService } from 'src/app/services/crypto.service';
import { HttpClientModule } from '@angular/common/http';

describe('CryptoCardChartComponent', () => {
  let component: CryptoCardChartComponent;
  let fixture: ComponentFixture<CryptoCardChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CryptoCardChartComponent],
      imports: [MatDialogModule, HttpClientModule],
      providers: [
        CryptoService,
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    });
    fixture = TestBed.createComponent(CryptoCardChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a line chart with the provided data', () => {
    const mockChartData = { data: [{ date: '2023-07-01T00:00:00Z', priceUsd: '100' }, { date: '2023-07-03T00:00:00Z', priceUsd: '250' },{ date: '2023-07-04T00:00:00Z', priceUsd: '100' }] };
    component.priceData = mockChartData;
    
   
    component.createLineChart();

    expect(component.lineChart).toBeDefined();
    
  });

});
