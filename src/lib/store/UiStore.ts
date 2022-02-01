import { makeAutoObservable } from 'mobx'

class UiStore {
  theme = false

  constructor() {
    makeAutoObservable(this)
  }

  toggleMode() {
    this.theme = !this.theme
  }
}

export default new UiStore()