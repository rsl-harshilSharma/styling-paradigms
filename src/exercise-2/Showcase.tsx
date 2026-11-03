import type { ReactNode } from 'react'
import {
  Badge,
  Button as LibraryButton,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from './components'
import {
  codePillStyles,
  componentCardGridStyles,
  libraryEyebrowStyles,
  libraryLeadStyles,
  libraryPageStyles,
  specListStyles,
  specRowStyles,
  variantGridStyles,
} from './componentStyles.css'
import { themeClass } from './theme.css'

function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
      <div>
        <p className={libraryEyebrowStyles}>{eyebrow}</p>
        <h2 className="mt-2 text-xl font-bold tracking-tight">{title}</h2>
      </div>
      {children}
    </div>
  )
}

export default function Showcase() {
  return (
    <div className={`${themeClass} ${libraryPageStyles} min-h-screen bg-canvas px-4 py-8 sm:px-8 sm:py-12`}>
      <main className="mx-auto max-w-5xl">
        <header className="mb-10 border-b border-line pb-8 sm:mb-12">
          <p className={libraryEyebrowStyles}>Exercise 2 · Vanilla Extract</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">A small, type-safe component library.</h1>
          <p className={`${libraryLeadStyles} mt-3 max-w-2xl text-sm sm:text-base`}>
            Reusable Button, Card, and Badge components. Tokens and variants are typed in
            TypeScript, and Vanilla Extract emits static CSS during the production build.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className={codePillStyles}>theme.css.ts</span>
            <span className={codePillStyles}>componentStyles.css.ts</span>
            <span className={codePillStyles}>CSS generated at build time</span>
          </div>
        </header>

        <section className="mb-10" aria-labelledby="button-showcase-title">
          <SectionHeading eyebrow="01 · Button" title="Variants, sizes & states" />
          <div className={componentCardGridStyles}>
            <Card>
              <CardHeader>
                <h3 className="text-sm font-bold" id="button-showcase-title">Intent variants</h3>
                <p className="mt-1 text-xs text-slate-500">The same component API, composed from a base recipe and intent styles.</p>
              </CardHeader>
              <CardBody>
                <div className={variantGridStyles}>
                  <LibraryButton variant="primary">Primary action</LibraryButton>
                  <LibraryButton variant="secondary">Secondary</LibraryButton>
                  <LibraryButton variant="danger">Delete item</LibraryButton>
                </div>
              </CardBody>
              <CardFooter>
                <span className="text-xs text-slate-500">Hover and keyboard-focus to inspect states</span>
                <span className={codePillStyles}>variant</span>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <h3 className="text-sm font-bold">Size & disabled states</h3>
                <p className="mt-1 text-xs text-slate-500">Size variants share the same focus and disabled behavior.</p>
              </CardHeader>
              <CardBody>
                <div className={variantGridStyles}>
                  <LibraryButton size="small" variant="secondary">Small</LibraryButton>
                  <LibraryButton size="medium">Medium</LibraryButton>
                  <LibraryButton size="large" variant="secondary">Large</LibraryButton>
                  <LibraryButton disabled>Disabled</LibraryButton>
                </div>
              </CardBody>
              <CardFooter>
                <span className="text-xs text-slate-500">Tab to a button for a visible focus ring</span>
                <span className={codePillStyles}>size</span>
              </CardFooter>
            </Card>
          </div>
        </section>

        <section className="mb-10" aria-labelledby="badge-showcase-title">
          <SectionHeading eyebrow="02 · Badge" title="Status at a glance">
            <span className="text-xs text-slate-500">Three typed status variants</span>
          </SectionHeading>
          <Card>
            <CardBody>
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="success">Published</Badge>
                <Badge variant="warning">Needs review</Badge>
                <Badge variant="error">Failed</Badge>
              </div>
            </CardBody>
          </Card>
        </section>

        <section aria-labelledby="card-showcase-title">
          <SectionHeading eyebrow="03 · Card" title="Composable content surfaces" />
          <div className={componentCardGridStyles}>
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-bold" id="card-showcase-title">Starter workspace</h3>
                    <p className="mt-1 text-xs text-slate-500">A card with header, body, and footer slots.</p>
                  </div>
                  <Badge variant="success">Active</Badge>
                </div>
              </CardHeader>
              <CardBody>
                <p className="text-sm leading-6 text-slate-600">
                  Compose a consistent surface from small pieces. Shared spacing, radius,
                  border, and shadow values come from the theme contract.
                </p>
              </CardBody>
              <CardFooter>
                <span className="text-xs text-slate-500">3 components included</span>
                <LibraryButton size="small">Open workspace</LibraryButton>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <h3 className="text-sm font-bold">Shared design tokens</h3>
                <p className="mt-1 text-xs text-slate-500">A single typed contract powers every primitive.</p>
              </CardHeader>
              <CardBody>
                <dl className={specListStyles}>
                  {[
                    ['Color', 'brand · surface · ink'],
                    ['Spacing', 'xs · sm · md · lg · xl'],
                    ['Shape', 'control · card · pill'],
                    ['Output', 'static CSS at build time'],
                  ].map(([label, value]) => (
                    <div className={specRowStyles} key={label}>
                      <dt className="text-sm font-semibold">{label}</dt>
                      <dd className={codePillStyles}>{value}</dd>
                    </div>
                  ))}
                </dl>
              </CardBody>
            </Card>
          </div>
        </section>
        <footer className="mt-12 border-t border-line pt-5 text-xs text-slate-500">
          Vanilla Extract styles are compiled into the production CSS bundle—no browser runtime style generation.
        </footer>
      </main>
    </div>
  )
}
