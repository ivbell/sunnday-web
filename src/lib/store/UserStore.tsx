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
  userLogout() {
    this.isAuth = false
  }
}

export default new UserStore()
