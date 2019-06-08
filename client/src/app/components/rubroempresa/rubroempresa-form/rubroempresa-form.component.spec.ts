import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RubroempresaFormComponent } from './rubroempresa-form.component';

describe('RubroempresaFormComponent', () => {
  let component: RubroempresaFormComponent;
  let fixture: ComponentFixture<RubroempresaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RubroempresaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RubroempresaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
