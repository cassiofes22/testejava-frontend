import { SendService } from './../../../services/send.service';
import { Send } from './../../../models/send.model';
import { Component } from '@angular/core';

import { BaseResourceListComponent } from '../../../components/base-resource-list/base-resource-list.component';

@Component({
    selector: 'app-send-list',
    templateUrl: './send-list.component.html',
    styleUrls: ['./send-list.component.css']
})
export class SendListComponent extends BaseResourceListComponent<Send> {

    constructor(private sendService: SendService) {
        super(sendService);
    }


}

