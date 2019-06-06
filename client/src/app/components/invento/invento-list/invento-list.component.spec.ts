import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoListComponent } from './invento-list.component';

describe('InventoListComponent', () => {
  let component: InventoListComponent;
  let fixture: ComponentFixture<InventoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
