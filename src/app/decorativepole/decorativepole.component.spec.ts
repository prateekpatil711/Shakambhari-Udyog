import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecorativepoleComponent } from './decorativepole.component';

describe('DecorativepoleComponent', () => {
  let component: DecorativepoleComponent;
  let fixture: ComponentFixture<DecorativepoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecorativepoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecorativepoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
