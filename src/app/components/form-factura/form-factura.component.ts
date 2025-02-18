import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { DetalleFacturaComponent } from '../detalle-factura/detalle-factura.component';
import { FacturaServiceService } from '../../services/factura-service.service';

@Component({
  selector: 'app-form-factura',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    DetalleFacturaComponent
  ],
  templateUrl: './form-factura.component.html',
  styleUrls: ['./form-factura.component.css']
})
export class FormFacturaComponent {
  // Definir el formulario de factura con un FormArray para productos
  public facturaForm = new FormGroup({
    Nombre: new FormControl('', Validators.required),
    Documento: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
    Direccion: new FormControl('', Validators.required),
  });

  constructor(private facturaService: FacturaServiceService) {
    this.formCotizacion
  }
  
  // Método para manejar el envío del formulario
  formCotizacion() {
    if (this.facturaForm.valid) {
      const nuevaFactura = this.facturaForm.value;
      this.facturaService.agregarFactura(nuevaFactura);
      console.log(this.facturaForm);
    } else {
      console.log('El formulario no es válido');
    }
  }     
}
