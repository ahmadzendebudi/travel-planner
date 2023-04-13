import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityContentComponent } from './city-content.component';

describe('CityContentComponent', () => {
  let component: CityContentComponent;
  let fixture: ComponentFixture<CityContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
