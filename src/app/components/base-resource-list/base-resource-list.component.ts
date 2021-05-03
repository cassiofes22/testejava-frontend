import {Directive, OnInit} from '@angular/core';
import { BaseResourceModel } from 'app/models/base-resource.model';
import { BaseResourceService } from 'app/services/base-resource.service';
import { environment } from 'environments/environment';



@Directive()
export abstract class BaseResourceListComponent<T extends BaseResourceModel> implements OnInit {
  resources: T[] = [];

  apiFileUrl = `${environment.apiUrl}/manaut-api/file`;

  constructor(private baseResourceService: BaseResourceService<T>) {
  }

  ngOnInit(): void {
    this.baseResourceService.getAll().subscribe(
      // (entries) => (this.resources = entries.sort((a, b) => b.getId() - a.getId())),
      (entries) => (this.resources = entries),
      (error) => alert('Erro ao carregar lista')
    );
  }

  deleteResource(resource: T): void {
    const mustDelete = confirm('Deseja realmente excluir este item?');

    if (mustDelete) {
      this.baseResourceService.delete(resource.getId()).subscribe(
        () =>
          (this.resources = this.resources.filter(
            (element) => element !== resource
          )),
        () => alert('Erro ao deletar')
      );
    }
  }

  loadUrlFile(idFile: string): string {
    return `${this.apiFileUrl}/${idFile}`;
  }

  loadImage(idImage: string): string {
    if (idImage != null) {
      return `${this.apiFileUrl}/${idImage}`;
    } else {
      return 'assets/img/default.png';
    }
  }
}
