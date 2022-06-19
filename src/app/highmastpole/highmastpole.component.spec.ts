import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighmastpoleComponent } from './highmastpole.component';

describe('HighmastpoleComponent', () => {
  let component: HighmastpoleComponent;
  let fixture: ComponentFixture<HighmastpoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighmastpoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighmastpoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
