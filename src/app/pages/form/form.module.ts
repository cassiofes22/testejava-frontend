import {NgModule} from '@angular/core';

import {FormRoutingModule} from './form-routing.module';
import {FormFormComponent} from './form-form/form-form.component';
import {FormListComponent} from './form-list/form-list.component';
import {SharedModule} from "../../modules/shared.module";
import { WebcamModule } from 'ngx-webcam';


@NgModule({
    declarations: [FormFormComponent, FormListComponent],
    imports: [
        WebcamModule,
        SharedModule,
        FormRoutingModule
    ]
})
export class FormModule {
}
