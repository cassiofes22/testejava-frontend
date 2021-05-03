import {BaseResourceModel} from "./base-resource.model";
import { MyFile } from "./my-file.model";

export class Form extends BaseResourceModel{

  constructor(
    public idForm?: number,
    public dsForm?: string,
    public tbFiles?: MyFile[]
  ) {
    super()
  }

  static fromJson(jsonData: any): Form {
    return Object.assign(new Form(), jsonData);
  }

  public getId() {
    return this.idForm;
  }

}
