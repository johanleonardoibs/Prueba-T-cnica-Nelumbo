import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellPhoneListComponent } from './cell-phone-list.component';

describe('CellPhoneListComponent', () => {
  let component: CellPhoneListComponent;
  let fixture: ComponentFixture<CellPhoneListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CellPhoneListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CellPhoneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
