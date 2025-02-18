import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatoFacturaComponent } from './formato-factura.component';

describe('FormatoFacturaComponent', () => {
  let component: FormatoFacturaComponent;
  let fixture: ComponentFixture<FormatoFacturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormatoFacturaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormatoFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
