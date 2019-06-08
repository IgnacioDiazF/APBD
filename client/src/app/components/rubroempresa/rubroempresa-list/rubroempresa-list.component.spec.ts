import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RubroempresaListComponent } from './rubroempresa-list.component';

describe('RubroempresaListComponent', () => {
  let component: RubroempresaListComponent;
  let fixture: ComponentFixture<RubroempresaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RubroempresaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RubroempresaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
