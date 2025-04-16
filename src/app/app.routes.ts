import { Routes } from '@angular/router';
import { AuthGuard } from './protected/guards/auth.guard';
import { LoginGuard } from './protected/guards/login.guard';
import { LoginComponent } from './protected/login/login.component';
import { LogoutComponent } from './protected/logout/logout.component';

export const routes: Routes = [
  {
    path: 'login',
    title: 'Inicio de sesión',
    component: LoginComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'register',
    title: 'Registro',
    component: LogoutComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'logout',
    title: 'Cierre de sesión',
    component: LogoutComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./shared/components/dashboard/dashboard.component'),
    loadChildren: () =>
      import('./private/private.routes').then((r) => r.privateRoutes),
    canActivate: [AuthGuard],
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
