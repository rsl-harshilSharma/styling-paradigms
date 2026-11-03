import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react'
import {
  badgeBaseStyles,
  badgeStyles,
  buttonStyles,
  cardBodyStyles,
  cardFooterStyles,
  cardHeaderStyles,
  cardStyles,
} from './componentStyles.css'

type ButtonVariant = 'primary' | 'secondary' | 'danger'
type ButtonSize = 'small' | 'medium' | 'large'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  children: ReactNode
}

export function Button({
  variant = 'primary',
  size = 'medium',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={[buttonStyles({ variant, size }), className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </button>
  )
}

interface CardProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
}

export function Card({ className, children, ...props }: CardProps) {
  return (
    <article className={[cardStyles, className].filter(Boolean).join(' ')} {...props}>
      {children}
    </article>
  )
}

export function CardHeader({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={[cardHeaderStyles, className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}

export function CardBody({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={[cardBodyStyles, className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}

export function CardFooter({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={[cardFooterStyles, className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}

type BadgeVariant = 'success' | 'warning' | 'error'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant: BadgeVariant
  children: ReactNode
}

export function Badge({ variant, className, children, ...props }: BadgeProps) {
  return (
    <span
      className={[badgeBaseStyles, badgeStyles[variant], className].filter(Boolean).join(' ')}
      {...props}
    >
      <span aria-hidden="true">●</span>
      {children}
    </span>
  )
}
