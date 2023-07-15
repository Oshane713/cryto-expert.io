import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SearchFilterComponent } from './search-filter.component';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SearchFilterComponent', () => {
  let component: SearchFilterComponent;
  let fixture: ComponentFixture<SearchFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchFilterComponent],
      imports: [MatFormFieldModule,MatSelectModule,BrowserAnimationsModule]
    });
    fixture = TestBed.createComponent(SearchFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit undefined when "showAll" is selected', () => {
    spyOn(component.filterChanged, 'emit');
    component.selectedCoins = ['showAll'];
    component.applyFilter();
    expect(component.filterChanged.emit).toHaveBeenCalledWith(undefined);
  });

  it('should emit selected coin values when not "showAll" is selected', () => {
    spyOn(component.filterChanged, 'emit');
    component.selectedCoins = ['BTC', 'ETH'];
    component.applyFilter();
    expect(component.filterChanged.emit).toHaveBeenCalledWith(['BTC', 'ETH']);
  });

  it('should emit selected coin values when no "showAll" option is selected', () => {
    spyOn(component.filterChanged, 'emit');
    component.selectedCoins = [];
    component.applyFilter();
    expect(component.filterChanged.emit).toHaveBeenCalledWith([]);
  });
});
