import { Injectable, Injector } from "@angular/core";
import { PessoaDoadores } from "app/models/pessoa_doadores.model";
import { environment } from "environments/environment";
import { BaseResourceService } from "./base-resource.service";

@Injectable({
    providedIn: 'root'
})

  export class PessoaDoadoresService extends BaseResourceService<PessoaDoadores> {

    constructor(protected injector: Injector) {
      super(`${environment.apiUrl}/pessoa/doadores`, injector, PessoaDoadores.fromJson);
    }
  
  }
  