import { Component } from "@angular/core";
import { BaseResourceListComponent } from "app/components/base-resource-list/base-resource-list.component";
import { PessoaMediaIdade } from "app/models/pessoa_media_idade.model";
import { PessoaMediaIdadeService } from "app/services/pessoa_media_idade.service";

@Component({
    selector: 'app-media-idade',
    templateUrl: './media_idade.component.html',
    styleUrls: ['./media_idade.component.css']
  })
  export class MediaIdadeComponent extends BaseResourceListComponent<PessoaMediaIdade> {
  
    constructor(private pessoaMediaIdadeService: PessoaMediaIdadeService) { 
      super(pessoaMediaIdadeService);
    }
  
  }
  