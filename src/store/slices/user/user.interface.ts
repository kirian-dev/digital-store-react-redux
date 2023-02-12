export interface IUser {
  email: string | null;
  name: string | null;
}

export interface IUserState {
  user: IUser | null;
  isLoading: boolean;
}

export interface IEmailPassword {
  email: string;
  password: string;
}
