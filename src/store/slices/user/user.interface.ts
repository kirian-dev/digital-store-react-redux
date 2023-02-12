export interface IUser {
  email: string | null;
  name: string | null;
}

export interface IUserState {
  user: IUser | null;
  isLoading: boolean;
}

export interface IAuth {
  email: string;
  password: string;
  onSuccess: () => void;
}
