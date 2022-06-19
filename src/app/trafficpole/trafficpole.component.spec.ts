import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficpoleComponent } from './trafficpole.component';

describe('TrafficpoleComponent', () => {
  let component: TrafficpoleComponent;
  let fixture: ComponentFixture<TrafficpoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrafficpoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrafficpoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
