import { ITheme, ThemeEnum } from '../../types/styled'
import { DefaultTheme } from 'styled-components'

export const baseTheme: ITheme = {
  colors: {
    primary: '#A78BFA',
    error: '#F87171',
    secondary: '#60A5FA',
    danger: '#FBBF24',
    success: '#4ADE80',

    text: '#CACACA',
    text_secondary: '#939393',
    text_white: '#FFFFFF',
    text_black: '#323232',

    bg_black: '#232227',
    bg_black_hover: '#3A3A3A',
    bg_gray: '#E5E5E5',
    bg_gray_hover: '#F3F3F3',
    bg_body: '#F4F4F4',
  },
}

export const lightTheme: DefaultTheme = {
  ...baseTheme,
  type: ThemeEnum.light,

  colors: {
    ...baseTheme.colors,
    bg_body: '#F4F4F4',
  },
}

export const darkTheme: DefaultTheme = {
  ...baseTheme,
  type: ThemeEnum.dark,

  colors: {
    ...baseTheme.colors,
    bg_body: '#3A3A3A',
  },
}