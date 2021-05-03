import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from '../pages/admin-layout/footer/footer.component';

import { SharedModule } from './shared.module';
import { NavbarComponent } from 'app/pages/admin-layout/navbar/navbar.component';
import { SidebarComponent } from 'app/pages/admin-layout/sidebar/sidebar.component';

@NgModule({
    declarations: [
        FooterComponent,
        NavbarComponent,
        SidebarComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        SharedModule
    ],
    exports: [
        FooterComponent,
        NavbarComponent,
        SidebarComponent
    ]
})
export class ComponentsModule {
}
