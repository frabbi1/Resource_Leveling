import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinimizedGraphComponent } from './minimized-graph.component';

describe('MinimizedGraphComponent', () => {
  let component: MinimizedGraphComponent;
  let fixture: ComponentFixture<MinimizedGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinimizedGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinimizedGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
