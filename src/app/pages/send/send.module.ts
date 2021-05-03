import { SendListComponent } from './send-list/send-list.component';
import { SendFormComponent } from './send-form/send-form.component';
import { SendRoutingModule } from './send-routing.module';
import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { WebcamModule } from 'ngx-webcam';

import { SharedModule } from '../../modules/shared.module';



@NgModule({
    declarations: [SendFormComponent, SendListComponent],
    imports: [
        WebcamModule,
        SharedModule,
        SendRoutingModule,
        MatCheckboxModule
    ]
})
export class SendModule {
}
