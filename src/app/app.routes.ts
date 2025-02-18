import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:"facturador",
    loadComponent:() => import('./interfaces/content/content.component').then(m => m.ContentComponent),
    children:[
      {
        path:"listado-cotizaciones",
        title:"Cotizaciones",
        loadComponent:() => import('./pages/listado-cotizaciones/listado-cotizaciones.component').then(m => m.ListadoCotizacionesComponent)
      },
      {
        path:"facturacion",
        title:"facturacion",
        loadComponent:() => import('./pages/crear-factura/crear-factura.component').then(m => m.CrearFacturaComponent)
      },
      {
        path:'', redirectTo: 'listado-cotizaciones', pathMatch:'full',
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'facturador',
    pathMatch:'full'
  }
];
