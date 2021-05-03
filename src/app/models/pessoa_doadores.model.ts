import { BaseResourceModel } from "./base-resource.model";

export class PessoaDoadores extends BaseResourceModel{

    static fromJson(jsonData: any): PessoaDoadores {
        return Object.assign(new PessoaDoadores(), jsonData);
    }

    constructor(
        public id?: bigint,
        public tipo_sanguineo?: string,
        public doadores?: string,

    ) {
        super();
    }

    public getId() {
        return this.id;
      }
}