import { Routes } from '@angular/router';
import {CellPhonesComponent} from "./cell-phones.component";

export const cellPhonesRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./cell-phones.component').then(c => c.CellPhonesComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./cell-phone-list/cell-phone-list.component').then(c => c.CellPhoneListComponent)
      },
      {
        path: ':device',
        loadComponent: () =>
          import('./cell-phone-detail/cell-phone-detail.component').then(c => c.CellPhoneDetailComponent)
      }
    ]
  }
];
