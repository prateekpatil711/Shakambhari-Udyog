import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndlshedComponent } from './indlshed.component';

describe('IndlshedComponent', () => {
  let component: IndlshedComponent;
  let fixture: ComponentFixture<IndlshedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndlshedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndlshedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
