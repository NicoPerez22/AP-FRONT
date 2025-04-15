import { Routes } from '@angular/router';
import { LoginComponent } from './protected/login/login.component';
import { LogoutComponent } from './protected/logout/logout.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'logout',
    title: 'Cierre de sesión',
    component: LogoutComponent,
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./shared/components/dashboard/dashboard.component'),
    loadChildren: () =>
      import('./private/private.routes').then((r) => r.privateRoutes),
    //   canMatch: [guard],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];
