import { BaseResourceModel } from './base-resource.model';

export class MyFile extends BaseResourceModel {

  static fromJson(jsonData: any): MyFile {
    return Object.assign(new MyFile(), jsonData);
  }

  constructor(
    public idFile?: string,
    public dsFileType?: string,
    public nmFile?: string,
    public imThumbnail?: Blob[],
    public file?: Blob[],

  ) {
    super()
  }

  public getId() {
    return this.idFile;
  }

}
