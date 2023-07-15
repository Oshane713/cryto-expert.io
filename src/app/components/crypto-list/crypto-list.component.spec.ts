import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CryptoListComponent } from './crypto-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CryptoService } from 'src/app/services/crypto.service';

describe('CryptoListComponent', () => {
  let component: CryptoListComponent;
  let fixture: ComponentFixture<CryptoListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CryptoListComponent],
      imports: [HttpClientTestingModule],
      providers: [CryptoService]
    });
    fixture = TestBed.createComponent(CryptoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
