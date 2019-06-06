import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoinventoFormComponent } from './tipoinvento-form.component';

describe('TipoinventoFormComponent', () => {
  let component: TipoinventoFormComponent;
  let fixture: ComponentFixture<TipoinventoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoinventoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoinventoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
