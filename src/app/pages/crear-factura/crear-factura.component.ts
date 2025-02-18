import { Component } from '@angular/core';
import { FormFacturaComponent } from '../../components/form-factura/form-factura.component';

@Component({
  selector: 'app-crear-factura',
  standalone: true,
  imports: [
    FormFacturaComponent
  ],
  templateUrl: './crear-factura.component.html',
  styleUrl: './crear-factura.component.css'
})
export class CrearFacturaComponent {

}
