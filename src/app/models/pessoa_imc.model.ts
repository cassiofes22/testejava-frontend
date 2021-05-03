import { BaseResourceModel } from "./base-resource.model";

export class PessoaImc extends BaseResourceModel{

    static fromJson(jsonData: any): PessoaImc {
        return Object.assign(new PessoaImc(), jsonData);
    }

    constructor(
        public id?: bigint,
        public idade?: string,
        public imc?: string,

    ) {
        super();
    }

    public getId() {
        return this.id;
      }
}