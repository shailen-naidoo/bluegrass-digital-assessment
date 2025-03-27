class UserModel {
  fullname: string | null

  constructor({ fullname = null }) {
    this.fullname = fullname
  }

  static create = (user = {}) => new UserModel(user)
}

export { UserModel }