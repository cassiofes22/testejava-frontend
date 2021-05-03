import { Injectable, Injector } from "@angular/core";
import { PessoaObesidade } from "app/models/pessoa_obesidade.model";
import { environment } from "environments/environment";
import { BaseResourceService } from "./base-resource.service";

@Injectable({
    providedIn: 'root'
})

  export class PessoaObesidadeService extends BaseResourceService<PessoaObesidade> {

    constructor(protected injector: Injector) {
      super(`${environment.apiUrl}/pessoa/obesidade`, injector, PessoaObesidade.fromJson);
    }
  
  }
  