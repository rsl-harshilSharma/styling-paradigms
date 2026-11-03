import { style, styleVariants } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'
import { tokens } from './theme.css'

export const buttonStyles = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: tokens.space.sm,
    border: '1px solid transparent',
    borderRadius: tokens.radius.control,
    fontFamily: tokens.font.body,
    fontWeight: 650,
    lineHeight: 1.25,
    textDecoration: 'none',
    transition: 'background-color 140ms ease, border-color 140ms ease, color 140ms ease, box-shadow 140ms ease',
    selectors: {
      '&:focus-visible': {
        outline: `3px solid ${tokens.color.focus}`,
        outlineOffset: 2,
      },
      '&:disabled': {
        cursor: 'not-allowed',
        opacity: 0.48,
        boxShadow: 'none',
      },
    },
  },
  variants: {
    variant: {
      primary: {
        color: '#fff',
        background: tokens.color.brand,
        selectors: {
          '&:hover:not(:disabled)': { background: tokens.color.brandHover },
        },
      },
      secondary: {
        color: tokens.color.ink,
        borderColor: tokens.color.border,
        background: tokens.color.surface,
        selectors: {
          '&:hover:not(:disabled)': {
            borderColor: tokens.color.brand,
            background: tokens.color.brandSoft,
          },
        },
      },
      danger: {
        color: '#fff',
        background: tokens.color.danger,
        selectors: {
          '&:hover:not(:disabled)': { background: tokens.color.dangerHover },
        },
      },
    },
    size: {
      small: {
        minHeight: 34,
        padding: `0 ${tokens.space.md}`,
        fontSize: tokens.font.small,
      },
      medium: {
        minHeight: 42,
        padding: `0 ${tokens.space.lg}`,
        fontSize: '0.875rem',
      },
      large: {
        minHeight: 50,
        padding: `0 ${tokens.space.xl}`,
        fontSize: '0.9375rem',
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'medium',
  },
})

export const cardStyles = style({
  overflow: 'hidden',
  border: `1px solid ${tokens.color.border}`,
  borderRadius: tokens.radius.card,
  background: tokens.color.surface,
  boxShadow: tokens.shadow.card,
})

export const cardHeaderStyles = style({
  padding: tokens.space.lg,
  borderBottom: `1px solid ${tokens.color.border}`,
  '@media': {
    '(min-width: 720px)': {
      padding: tokens.space.xl,
    },
  },
})

export const cardBodyStyles = style({
  padding: tokens.space.lg,
  '@media': {
    '(min-width: 720px)': {
      padding: tokens.space.xl,
    },
  },
})

export const cardFooterStyles = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: tokens.space.md,
  padding: `${tokens.space.md} ${tokens.space.lg}`,
  borderTop: `1px solid ${tokens.color.border}`,
})

export const badgeStyles = styleVariants({
  success: {
    color: tokens.color.success,
    background: tokens.color.successSoft,
  },
  warning: {
    color: tokens.color.warning,
    background: tokens.color.warningSoft,
  },
  error: {
    color: tokens.color.danger,
    background: tokens.color.dangerSoft,
  },
})

export const badgeBaseStyles = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: tokens.space.xs,
  padding: `${tokens.space.xs} ${tokens.space.sm}`,
  borderRadius: tokens.radius.pill,
  fontFamily: tokens.font.body,
  fontSize: tokens.font.small,
  fontWeight: 650,
  lineHeight: 1.25,
})

export const libraryPageStyles = style({
  fontFamily: tokens.font.body,
  color: tokens.color.ink,
})

export const libraryLeadStyles = style({
  color: tokens.color.muted,
  lineHeight: 1.65,
})

export const libraryEyebrowStyles = style({
  margin: 0,
  color: tokens.color.brand,
  fontSize: '0.7rem',
  fontWeight: 750,
  letterSpacing: '0.13em',
  textTransform: 'uppercase',
})

export const variantGridStyles = style({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: tokens.space.md,
})

export const componentCardGridStyles = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: tokens.space.lg,
  '@media': {
    '(min-width: 900px)': {
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    },
  },
})

export const specListStyles = style({
  display: 'grid',
  gap: tokens.space.md,
  margin: 0,
})

export const specRowStyles = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: tokens.space.md,
})

export const codePillStyles = style({
  padding: `${tokens.space.xs} ${tokens.space.sm}`,
  borderRadius: tokens.radius.control,
  color: tokens.color.brandHover,
  background: tokens.color.brandSoft,
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
  fontSize: '0.75rem',
})
