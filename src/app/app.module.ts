import { NgModule } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AdminLayoutComponent } from './pages/admin-layout/admin-layout.component';
import { AgmCoreModule } from '@agm/core';
import { AuthService } from './security/auth.service';
import { AuthGuard } from './security/auth-guard.service';
import { CoreModule } from './modules/core.module';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
    imports: [
        CoreModule,
        AgmCoreModule.forRoot({
            apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
        }),
        JwtModule.forRoot({
            config: {
                tokenGetter: () => {
                    return localStorage.getItem('token');
                },
                allowedDomains: [environment.apiWhitelisted],
                disallowedRoutes: [`${environment.apiUrl}/login`]
            }
        }),
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    ],
    declarations: [
        AppComponent,
        AdminLayoutComponent
    ],
    providers: [
        AuthService,
        AuthGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
