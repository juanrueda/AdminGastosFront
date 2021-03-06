import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarGastoComponent } from './editar-gasto.component';

describe('EditarGastoComponent', () => {
  let component: EditarGastoComponent;
  let fixture: ComponentFixture<EditarGastoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarGastoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarGastoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
