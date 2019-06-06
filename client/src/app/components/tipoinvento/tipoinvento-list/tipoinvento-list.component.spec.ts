import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoinventoListComponent } from './tipoinvento-list.component';

describe('TipoinventoListComponent', () => {
  let component: TipoinventoListComponent;
  let fixture: ComponentFixture<TipoinventoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoinventoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoinventoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
