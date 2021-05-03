import {BaseResourceModel} from '../base-resource.model';

export class User extends BaseResourceModel{

  static fromJson(jsonData: any): User {
    return Object.assign(new User(), jsonData);
  }

  constructor(
    public idUser?: number,
    public dsEmail?: string,
    public nmUser?: string,
    public nuDocument?: string,
    public nuDddCel?: string,
    public nuCel?: string,
    public dsToken?: string,
    public dtExpiry?: Date,
    public dtCreate?: Date,
    public dtLastPassword?: Date,
    public dsProvider?: string,
    public idGoogle?: string,
    public idTokenString?: string,
    public isEmailVerified?: boolean,
    public isPassword?: boolean
  ) {
    super()
  }

  public getId() {
    return this.idUser;
  }

}
