import { Injectable, Injector } from "@angular/core";
import { PessoaEstado } from "app/models/pessoa_estado.model";
import { environment } from "environments/environment";
import { BaseResourceService } from "./base-resource.service";

@Injectable({
    providedIn: 'root'
})

  export class PessoaEstadoService extends BaseResourceService<PessoaEstado> {

    constructor(protected injector: Injector) {
      super(`${environment.apiUrl}/pessoa/estado`, injector, PessoaEstado.fromJson);
    }
  
  }
  