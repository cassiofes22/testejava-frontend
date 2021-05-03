import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { UserProfileComponent } from '../../template/user-profile/user-profile.component';
import { TableListComponent } from '../../template/table-list/table-list.component';
import { TypographyComponent } from '../../template/typography/typography.component';
import { IconsComponent } from '../../template/icons/icons.component';
import { MapsComponent } from '../../template/maps/maps.component';
import { NotificationsComponent } from '../../template/notifications/notifications.component';
import { UpgradeComponent } from '../../template/upgrade/upgrade.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { EstadoComponent } from '../estado/estado.component';
import { ImcComponent } from '../imc/imc.component';
import { ObesidadeComponent } from '../obesidade/obesidade.component';
import { MediaIdadeComponent } from '../media_idade/media_idade.component';
import { DoadoresComponent } from '../doadores/doadores.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    DashboardComponent,
    EstadoComponent,
    ImcComponent,
    ObesidadeComponent,
    MediaIdadeComponent,
    DoadoresComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
  ]
})

export class AdminLayoutModule {}
