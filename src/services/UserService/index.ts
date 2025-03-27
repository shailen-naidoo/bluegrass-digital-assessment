import { UserModel } from "@/models/UserModel"

class UserService {
  static async getUser(): Promise<UserModel> {
    return fetch('http://localhost:3001/user')
      .then((res) => res.json())
      .then((res) => UserModel.create(res))
  }
}

export { UserService }