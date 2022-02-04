import { makeAutoObservable } from 'mobx'

class UserStore {
  isAuth = false
  userId = ''

  constructor() {
    makeAutoObservable(this)
  }
  userAuth() {
    this.isAuth = true
  }
  userIdUpdate(id: string) {
    this.userId = id
  }
}

export default new UserStore()
