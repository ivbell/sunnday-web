import { makeAutoObservable } from 'mobx'

class UserStore {
  isAuth = true

  constructor() {
    makeAutoObservable(this)
  }
}

export default new UserStore()
