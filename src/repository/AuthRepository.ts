import { IUser } from './../entity/IUser';
import { IAuthLoginPayload } from '../store/contracts/IAuth';
import { HttpClient } from "./HttpClient";

class AuthRepository extends HttpClient {

  public login(payload: IAuthLoginPayload) {
    return this.instance.get<IUser>('auth/login');
  }

}

export { AuthRepository };
