import { IUser } from '../entities/IUser';
import { IAuthLoginPayload } from '../stores/contracts/IAuth';
import { HttpClient } from "../services/HttpClient";

class AuthRepository extends HttpClient {

  public login(payload: IAuthLoginPayload) {
    return this.instance.get<IUser>('auth/login');
  }

}

export { AuthRepository };
