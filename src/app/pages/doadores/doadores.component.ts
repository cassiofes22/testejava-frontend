import { Component } from "@angular/core";
import { BaseResourceListComponent } from "app/components/base-resource-list/base-resource-list.component";
import { PessoaDoadores } from "app/models/pessoa_doadores.model";
import { PessoaDoadoresService } from "app/services/pessoa_doadores.service";

@Component({
    selector: 'app-doadores',
    templateUrl: './doadores.component.html',
    styleUrls: ['./doadores.component.css']
  })
  export class DoadoresComponent extends BaseResourceListComponent<PessoaDoadores> {
  
    constructor(private pessoaDoadoresService: PessoaDoadoresService) { 
      super(pessoaDoadoresService);
    }
  
  }
  