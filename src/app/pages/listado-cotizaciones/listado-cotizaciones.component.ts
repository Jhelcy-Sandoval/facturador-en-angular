import { Component } from '@angular/core';
import { FormFacturaComponent } from '../../components/form-factura/form-factura.component';
import { FacturaServiceService } from '../../services/factura-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listado-cotizaciones',
  standalone: true,
  imports: [
    FormFacturaComponent,
    CommonModule
  ],
  templateUrl: './listado-cotizaciones.component.html',
  styleUrl: './listado-cotizaciones.component.css'
})
export class ListadoCotizacionesComponent {
  public facturas: any[] = [];

  constructor(private facturaService: FacturaServiceService) {}

  ngOnInit() {
    this.facturas = this.facturaService.getFactura();
    console.log('Factura recibida:', this.facturas);
  }
}
