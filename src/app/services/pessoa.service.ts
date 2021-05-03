import { Injectable, Injector } from "@angular/core";
import { Pessoa } from "app/models/pessoa.model";
import { environment } from "environments/environment";
import { BaseResourceService } from "./base-resource.service";

@Injectable({
    providedIn: 'root'
})

  export class PessoaService extends BaseResourceService<Pessoa> {

    constructor(protected injector: Injector) {
      super(`${environment.apiUrl}/pessoa`, injector, Pessoa.fromJson);
    }
  
  }
  