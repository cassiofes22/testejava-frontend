import { BaseResourceModel } from './base-resource.model';

export class Dashboard extends BaseResourceModel{

  static fromJson(jsonData: any): Dashboard {
    return Object.assign(new Dashboard(), jsonData);
  }
  public getId() {
    throw new Error('Method not implemented.');
  }

  constructor(

  ) {
    super()
  }



}
