export class UserChangePassword {

  static fromJson(jsonData: any): UserChangePassword {
    return Object.assign(new UserChangePassword(), jsonData);
  }

  constructor(
    public idUser?: number,
    public newPassword?: string,
    public oldPassword?: string,
  ) {
  }

}
