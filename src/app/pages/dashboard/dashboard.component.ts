import { Component, OnInit } from '@angular/core';
import { BaseResourceListComponent } from 'app/components/base-resource-list/base-resource-list.component';
import { Pessoa } from 'app/models/pessoa.model';
import { PessoaService } from 'app/services/pessoa.service';
import * as Chartist from 'chartist';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends BaseResourceListComponent<Pessoa> {

  constructor(private pessoaService: PessoaService) { 
    super(pessoaService);
  }

}
