import { Component } from "@angular/core";
import { BaseResourceListComponent } from "app/components/base-resource-list/base-resource-list.component";
import { PessoaImc } from "app/models/pessoa_imc.model";
import { PessoaImcService } from "app/services/pessoa_imc.service";

@Component({
    selector: 'app-imc',
    templateUrl: './imc.component.html',
    styleUrls: ['./imc.component.css']
  })
  export class ImcComponent extends BaseResourceListComponent<PessoaImc> {
  
    constructor(private pessoaImcService: PessoaImcService) { 
      super(pessoaImcService);
    }
  
  }
  