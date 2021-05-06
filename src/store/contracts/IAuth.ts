import { IUser } from "../../entity/IUser";

interface IAuthState {
  authenticated: boolean;
  user?: IUser;
}

interface IAuthLoginPayload {
  email: string;
  password: string;
}


export type { IAuthState, IAuthLoginPayload };
