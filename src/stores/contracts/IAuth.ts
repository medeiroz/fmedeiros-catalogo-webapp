import { IUser } from "../../entities/IUser";

interface IAuthState {
  authenticated: boolean;
  user?: IUser;
}

interface IAuthLoginPayload {
  email: string;
  password: string;
}


export type { IAuthState, IAuthLoginPayload };
