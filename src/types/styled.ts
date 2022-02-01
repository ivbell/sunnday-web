export enum ThemeEnum {
  light = 'light',
  dark = 'dark'
}

export interface ITheme {
  colors: {
    primary: string
    error: string
    secondary: string
    danger: string
    success: string

    text: string
    text_secondary: string
    text_white: string
    text_black: string

    bg_black: string
    bg_black_hover: string
    bg_gray: string
    bg_gray_hover: string
    bg_body: string
  },
}