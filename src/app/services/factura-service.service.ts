import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FacturaServiceService {
  private facturas: any[] = [
    { Nombre: 'Cliente 1', Documento: '123456', Direccion: 'Calle 1' },
    { Nombre: 'Cliente 2', Documento: '789012', Direccion: 'Calle 2' },
    { Nombre: 'Cliente 3', Documento: '345678', Direccion: 'Calle 3' }
  ];

  setFactura(facturas: any) {
    this.facturas = facturas;
  }

  agregarFactura(nuevaFactura: any) {
    this.facturas.push(nuevaFactura);
    console.log('Factura añadida:', nuevaFactura);
  }

  getFactura() {
    return this.facturas;
  }
}
