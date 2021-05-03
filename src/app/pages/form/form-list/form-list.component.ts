import {Component} from '@angular/core';
import {BaseResourceListComponent} from "../../../components/base-resource-list/base-resource-list.component";
import {Form} from 'app/models/form.model';
import {FormService} from "../../../services/form.service";

@Component({
    selector: 'app-form-list',
    templateUrl: './form-list.component.html',
    styleUrls: ['./form-list.component.css']
})
export class FormListComponent extends BaseResourceListComponent<Form> {

    constructor(private formService: FormService) {
        super(formService);
    }


}

