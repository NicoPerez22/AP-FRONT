import { Routes } from '@angular/router';
import { AuthGuard } from './protected/guards/auth.guard';
import { LoginGuard } from './protected/guards/login.guard';
import { LoginComponent } from './protected/login/login.component';
import { LogoutComponent } from './protected/logout/logout.component';
import RegisterComponent from './protected/register/register.component';

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
    component: RegisterComponent,
    canActivate: [LoginGuard],
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
    canActivate: [AuthGuard], // Solo accesible si está autenticado
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
