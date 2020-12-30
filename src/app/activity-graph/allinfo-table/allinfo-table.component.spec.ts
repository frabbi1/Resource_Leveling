import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllinfoTableComponent } from './allinfo-table.component';

describe('AllinfoTableComponent', () => {
  let component: AllinfoTableComponent;
  let fixture: ComponentFixture<AllinfoTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllinfoTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllinfoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
