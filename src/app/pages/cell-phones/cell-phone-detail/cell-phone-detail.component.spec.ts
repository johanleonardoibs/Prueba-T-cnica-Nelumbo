import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellPhoneDetailComponent } from './cell-phone-detail.component';

describe('CellPhoneDetailComponent', () => {
  let component: CellPhoneDetailComponent;
  let fixture: ComponentFixture<CellPhoneDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CellPhoneDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CellPhoneDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
