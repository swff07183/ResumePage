export interface IUserSignup {
  username: string;
  password1: string;
  password2: string;
}

export interface IUserLogin {
  username: string;
  password: string;
}

export interface IUserInfo {
  name: string;
  userType?: string;
  gender: string;
  birth: string;
  email: string;
  mobile: string;
  number: string;
  address: string;
  addressDetail: string;
}
