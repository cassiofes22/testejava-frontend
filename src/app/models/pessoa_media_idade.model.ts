import { BaseResourceModel } from "./base-resource.model";

export class PessoaMediaIdade extends BaseResourceModel{

    static fromJson(jsonData: any): PessoaMediaIdade {
        return Object.assign(new PessoaMediaIdade(), jsonData);
    }

    constructor(
        public id?: bigint,
        public tipo_sanguineo?: string,
        public media_idade?: string,

    ) {
        super();
    }

    public getId() {
        return this.id;
      }
}