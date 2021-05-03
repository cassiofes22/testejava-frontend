import { Routes } from '@angular/router';
import { AuthGuard } from '../../security/auth-guard.service';
import { DashboardComponent } from '../dashboard/dashboard.component';

export const AdminLayoutRoutes: Routes = [

    { path: 'dashboard', canActivate: [AuthGuard], component: DashboardComponent },
    {
        path: 'users',
        canActivate: [AuthGuard],
        loadChildren: () => import('../users/users.module').then(m => m.UsersModule)
    },

    {
        path: 'send',
        canActivate: [AuthGuard],
        loadChildren: () => import('../send/send.module').then(m => m.SendModule)
    },
];
