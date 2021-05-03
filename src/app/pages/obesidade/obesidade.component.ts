import { Component } from "@angular/core";
import { BaseResourceListComponent } from "app/components/base-resource-list/base-resource-list.component";
import { PessoaObesidade } from "app/models/pessoa_obesidade.model";
import { PessoaObesidadeService } from "app/services/pessoa_obesidade.service";

@Component({
    selector: 'app-obesidade',
    templateUrl: './obesidade.component.html',
    styleUrls: ['./obesidade.component.css']
  })
  export class ObesidadeComponent extends BaseResourceListComponent<PessoaObesidade> {
  
    constructor(private pessoaObesidadeService: PessoaObesidadeService) { 
      super(pessoaObesidadeService);
    }
  
  }
  