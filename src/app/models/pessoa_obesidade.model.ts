import { BaseResourceModel } from "./base-resource.model";

export class PessoaObesidade extends BaseResourceModel{

    static fromJson(jsonData: any): PessoaObesidade {
        return Object.assign(new PessoaObesidade(), jsonData);
    }

    constructor(
        public id?: bigint,
        public sexo?: string,
        public media?: string,

    ) {
        super();
    }

    public getId() {
        return this.id;
      }
}