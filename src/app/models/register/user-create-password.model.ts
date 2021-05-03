export class UserCreatePassword {

  static fromJson(jsonData: any): UserCreatePassword {
    return Object.assign(new UserCreatePassword(), jsonData);
  }

  constructor(
    public idUser?: number,
    public newPassword?: string,
    public confirmPassword?: string
  ) {
  }
}
