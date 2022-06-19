import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusshelterComponent } from './busshelter.component';

describe('BusshelterComponent', () => {
  let component: BusshelterComponent;
  let fixture: ComponentFixture<BusshelterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusshelterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusshelterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
