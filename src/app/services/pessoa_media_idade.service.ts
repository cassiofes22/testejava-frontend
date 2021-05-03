import { Injectable, Injector } from "@angular/core";
import { PessoaMediaIdade } from "app/models/pessoa_media_idade.model";
import { environment } from "environments/environment";
import { BaseResourceService } from "./base-resource.service";

@Injectable({
    providedIn: 'root'
})

  export class PessoaMediaIdadeService extends BaseResourceService<PessoaMediaIdade> {

    constructor(protected injector: Injector) {
      super(`${environment.apiUrl}/pessoa/mediaidade`, injector, PessoaMediaIdade.fromJson);
    }
  
  }
  