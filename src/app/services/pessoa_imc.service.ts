import { Injectable, Injector } from "@angular/core";
import { PessoaImc } from "app/models/pessoa_imc.model";
import { environment } from "environments/environment";
import { BaseResourceService } from "./base-resource.service";

@Injectable({
    providedIn: 'root'
})

  export class PessoaImcService extends BaseResourceService<PessoaImc> {

    constructor(protected injector: Injector) {
      super(`${environment.apiUrl}/pessoa/imc`, injector, PessoaImc.fromJson);
    }
  
  }
  