import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatenteFormComponent } from './patente-form.component';

describe('PatenteFormComponent', () => {
  let component: PatenteFormComponent;
  let fixture: ComponentFixture<PatenteFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatenteFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatenteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
