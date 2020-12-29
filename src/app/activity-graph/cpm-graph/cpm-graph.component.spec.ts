import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpmGraphComponent } from './cpm-graph.component';

describe('CpmGraphComponent', () => {
  let component: CpmGraphComponent;
  let fixture: ComponentFixture<CpmGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpmGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpmGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
