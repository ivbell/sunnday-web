import { DefaultTheme } from 'styled-components'
import { darkTheme, lightTheme } from '../../styles/theme'
import { makeAutoObservable } from 'mobx'
import { ThemeEnum } from '../../types/styled'

class UiStore {
  theme: DefaultTheme = lightTheme

  constructor() {
    makeAutoObservable(this)
  }

  get isLightTheme() {
    return this.theme.theme === ThemeEnum.light
  }

  toggleTheme() {
    this.theme = this.isLightTheme ? darkTheme : lightTheme
  }
}

export default new UiStore()