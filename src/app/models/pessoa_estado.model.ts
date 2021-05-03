import { BaseResourceModel } from "./base-resource.model";

export class PessoaEstado extends BaseResourceModel{

    static fromJson(jsonData: any): PessoaEstado {
        return Object.assign(new PessoaEstado(), jsonData);
    }

    constructor(
        public id?: bigint,
        public estado?: string,
        public qtd?: string,

    ) {
        super();
    }

    public getId() {
        return this.id;
      }
}