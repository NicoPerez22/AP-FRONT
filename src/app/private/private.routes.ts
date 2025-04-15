import { Routes } from '@angular/router';

export const privateRoutes: Routes = [
  {
    path: 'inicio',
    title: 'Inicio',
    loadComponent: () => import('./home/home.component'),
  },
  {
    path: '**',
    redirectTo: 'inicio',
  },
];
