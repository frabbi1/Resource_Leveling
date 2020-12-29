import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgessDiagramComponent } from './burgess-diagram.component';

describe('BurgessDiagramComponent', () => {
  let component: BurgessDiagramComponent;
  let fixture: ComponentFixture<BurgessDiagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurgessDiagramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BurgessDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
