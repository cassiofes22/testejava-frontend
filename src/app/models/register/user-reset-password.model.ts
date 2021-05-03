export class UserResetPassword  {

  constructor(
    public dsEmail?: string,
  ) {
  }

  static fromJson(jsonData: any): UserResetPassword {
    return Object.assign(new UserResetPassword(), jsonData);
  }


}
