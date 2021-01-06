import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgessV2DiagramComponent } from './burgess-v2-diagram.component';

describe('BurgessV2DiagramComponent', () => {
  let component: BurgessV2DiagramComponent;
  let fixture: ComponentFixture<BurgessV2DiagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurgessV2DiagramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BurgessV2DiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
