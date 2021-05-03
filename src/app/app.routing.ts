import {NgModule} from '@angular/core';
import {CommonModule,} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {AdminLayoutComponent} from './pages/admin-layout/admin-layout.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },

    {
        path: '',
        component: AdminLayoutComponent,
        children: [{
            path: '',
            loadChildren: './pages/admin-layout/admin-layout.module#AdminLayoutModule'
        }]
    },

    {
        path: 'login',
        loadChildren: () => import('./pages/register/login/login.module').then(m => m.LoginModule)
    },
    {
        path: 'user-reset-password',
        loadChildren: () => import('./pages/register/user-reset-password/user-reset-password.module').then(m => m.UserResetPasswordModule)
    },
    {
        path: 'user-create-password/:id/:dsToken',
        loadChildren: () => import('./pages/register/user-create-password/user-create-password.module').then(m => m.UserCreatePasswordModule)
    },

];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes, {
    useHash: true,
    relativeLinkResolution: 'legacy'
})
    ],
    exports: [],
})
export class AppRoutingModule {
}
