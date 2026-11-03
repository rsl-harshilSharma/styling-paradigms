import { createTheme, createThemeContract } from '@vanilla-extract/css'

export const tokens = createThemeContract({
  color: {
    brand: null,
    brandHover: null,
    brandSoft: null,
    ink: null,
    muted: null,
    surface: null,
    border: null,
    danger: null,
    dangerHover: null,
    dangerSoft: null,
    success: null,
    successSoft: null,
    warning: null,
    warningSoft: null,
    focus: null,
  },
  space: {
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xl: null,
  },
  radius: {
    control: null,
    card: null,
    pill: null,
  },
  shadow: {
    card: null,
  },
  font: {
    body: null,
    small: null,
  },
})

export const themeClass = createTheme(tokens, {
  color: {
    brand: '#416ce0',
    brandHover: '#3457bd',
    brandSoft: '#eef3ff',
    ink: '#1b2537',
    muted: '#788397',
    surface: '#ffffff',
    border: '#e5eaf2',
    danger: '#c83f50',
    dangerHover: '#a92e3e',
    dangerSoft: '#fff0f1',
    success: '#247a55',
    successSoft: '#eaf7f0',
    warning: '#9a6412',
    warningSoft: '#fff5df',
    focus: '#9db7ff',
  },
  space: {
    xs: '0.375rem',
    sm: '0.625rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  },
  radius: {
    control: '0.625rem',
    card: '1rem',
    pill: '999px',
  },
  shadow: {
    card: '0 8px 26px rgb(27 37 55 / 7%)',
  },
  font: {
    body: 'Inter, ui-sans-serif, system-ui, sans-serif',
    small: '0.8125rem',
  },
})
