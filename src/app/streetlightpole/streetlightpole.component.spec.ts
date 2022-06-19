import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreetlightpoleComponent } from './streetlightpole.component';

describe('StreetlightpoleComponent', () => {
  let component: StreetlightpoleComponent;
  let fixture: ComponentFixture<StreetlightpoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreetlightpoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StreetlightpoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
