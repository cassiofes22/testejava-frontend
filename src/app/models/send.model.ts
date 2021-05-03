import { BaseResourceModel } from 'app/models/base-resource.model';

export class Send extends BaseResourceModel {

  static fromJson(jsonData: any): Send {
    return Object.assign(new Send(), jsonData);
  }

  constructor(
    public id?: number,
    public file?: string,
  ) {
    super()
  }

  public getId() {
    return this.id;
  }

}
