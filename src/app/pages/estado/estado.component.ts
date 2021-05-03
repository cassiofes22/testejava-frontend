import { Component } from "@angular/core";
import { BaseResourceListComponent } from "app/components/base-resource-list/base-resource-list.component";
import { PessoaEstado } from "app/models/pessoa_estado.model";
import { PessoaEstadoService } from "app/services/pessoa_estado.service";

@Component({
    selector: 'app-estado',
    templateUrl: './estado.component.html',
    styleUrls: ['./estado.component.css']
  })
  export class EstadoComponent extends BaseResourceListComponent<PessoaEstado> {
  
    constructor(private pessoaEstadoService: PessoaEstadoService) { 
      super(pessoaEstadoService);
    }
  
  }
  