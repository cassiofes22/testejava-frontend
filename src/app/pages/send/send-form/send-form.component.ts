import { SendService } from './../../../services/send.service';
import { Send } from './../../../models/send.model';
import { Component, Injector } from '@angular/core';
import { Validators } from '@angular/forms';

import { BaseResourceFormComponent } from '../../../components/base-resource-form/base-resource-form.component';
import { Pessoa } from 'app/models/pessoa.model';


@Component({
    selector: 'app-send-form',
    templateUrl: './send-form.component.html',
    styleUrls: ['./send-form.component.css']
})
export class SendFormComponent extends BaseResourceFormComponent<Send> {

  file: any;
  json: string;

    constructor(protected sendService: SendService, protected injector: Injector) {
      super(injector, new Send(), sendService, Send.fromJson)
    }

    protected buildResourceForm() {
      console.warn('form');
      this.resourceForm = this.formBuilder.group({
        id:    [null],
        file:    [null, [Validators.required, Validators.maxLength(255)]],
      });
    }

    
  fileChanged(e) {
      this.file = e.target.files[0];
      this.uploadDocument(this.file);
  }

  uploadDocument(file) {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.json = fileReader.result.toString();
    }
    fileReader.readAsText(this.file);
  }

  enviaArquivo() {
    this.sendService.sendJSON(this.json);
  }

}
