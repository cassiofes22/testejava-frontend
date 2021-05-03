import { BaseResourceModel } from "./base-resource.model";

export class Pessoa extends BaseResourceModel{

    static fromJson(jsonData: any): Pessoa {
        return Object.assign(new Pessoa(), jsonData);
    }

    constructor (
        public id?: bigint,
        public nome?: string,
        public cpf?: string,
        public rg?: string,
        public data_nasc?: string,
        public sexo?: string,
        public mae?: string,
        public pai?: string,
        public email?: string,
        public cep?: string,
        public endereco?: string,
        public numero?: string,
        public bairro?: string,
        public cidade?: string,
        public estado?: string,
        public telefone_fixo?: string,
        public celular?: string,
        public altura?: string,
        public peso?: string,
        public tipo_sanguineo?: string,
    ) {
        super()
    }

    public getId() {
        return this.id;
      }
}