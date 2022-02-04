import { makeAutoObservable } from 'mobx'

class UserStore {
  isAuth = false

  constructor() {
    makeAutoObservable(this)
  }
  userAuth() {
    this.isAuth = true
  }
}

export default new UserStore()
