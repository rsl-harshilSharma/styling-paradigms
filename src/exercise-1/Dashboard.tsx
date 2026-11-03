import { useMemo, useState, type FormEvent, type ReactNode } from 'react'

type ProductStatus = 'Active' | 'Low stock' | 'Draft' | 'Out of stock'

interface Product {
  id: string
  name: string
  category: string
  price: number
  status: ProductStatus
  image: string
  sales: number
}

const initialProducts: Product[] = [
  {
    id: 'p1',
    name: 'Studio Wireless Headphones',
    category: 'Audio',
    price: 249,
    status: 'Active',
    image: 'photo-1505740420928-5e560c06d30e',
    sales: 128,
  },
  {
    id: 'p2',
    name: 'Mechanical Keyboard',
    category: 'Accessories',
    price: 159,
    status: 'Active',
    image: 'photo-1595225476474-87563907a212',
    sales: 96,
  },
  {
    id: 'p3',
    name: 'Arc Ergonomic Mouse',
    category: 'Accessories',
    price: 89,
    status: 'Low stock',
    image: 'photo-1527814050087-3793815479db',
    sales: 74,
  },
  {
    id: 'p4',
    name: 'Ultra-wide Monitor',
    category: 'Displays',
    price: 699,
    status: 'Active',
    image: 'photo-1527443224154-c4a3942d3acf',
    sales: 52,
  },
  {
    id: 'p5',
    name: 'Portable SSD 1TB',
    category: 'Storage',
    price: 129,
    status: 'Out of stock',
    image: 'photo-1597872200969-2b65d56bd16b',
    sales: 41,
  },
  {
    id: 'p6',
    name: 'Desk Speaker Mini',
    category: 'Audio',
    price: 119,
    status: 'Draft',
    image: 'photo-1608043152269-423dbba4e7e1',
    sales: 0,
  },
]

const categories = ['All products', 'Audio', 'Accessories', 'Displays', 'Storage']
const money = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })

type IconName =
  | 'grid'
  | 'box'
  | 'chart'
  | 'users'
  | 'settings'
  | 'search'
  | 'plus'
  | 'arrow'
  | 'filter'
  | 'close'
  | 'sparkle'

const iconPaths: Record<IconName, ReactNode> = {
  grid: <><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></>,
  box: <><path d="m3 7 9-4 9 4v10l-9 4-9-4V7Z" /><path d="m3 7 9 4 9-4M12 11v10" /></>,
  chart: <><path d="M4 19V5M4 19h17" /><path d="m7 15 4-4 3 2 6-7" /></>,
  users: <><path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="10" cy="7" r="4" /><path d="M20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>,
  settings: <><circle cx="12" cy="12" r="3" /><path d="m19.4 15 .1.1 1.4 1.1-1.4 2.4-1.7-.7a8 8 0 0 1-1.6.9l-.3 1.8h-2.8l-.3-1.8a8 8 0 0 1-1.6-.9l-1.7.7-1.4-2.4L7.5 15a8 8 0 0 1 0-1.9L6.1 12l1.4-2.4 1.7.7a8 8 0 0 1 1.6-.9l.3-1.8h2.8l.3 1.8a8 8 0 0 1 1.6.9l1.7-.7 1.4 2.4-1.4 1.1a8 8 0 0 1-.1 1.9Z" /></>,
  search: <><circle cx="10.8" cy="10.8" r="6.8" /><path d="m16 16 4.5 4.5" /></>,
  plus: <><path d="M12 5v14M5 12h14" /></>,
  arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
  filter: <><path d="M4 7h16M7 12h10m-7 5h4" /><circle cx="8" cy="7" r="1.5" /><circle cx="15" cy="12" r="1.5" /></>,
  close: <><path d="m6 6 12 12M18 6 6 18" /></>,
  sparkle: <><path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" /><path d="m19 16 .8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z" /></>,
}

function Icon({ name, className = 'size-5' }: { name: IconName; className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
      viewBox="0 0 24 24"
    >
      {iconPaths[name]}
    </svg>
  )
}

function DashboardButton({
  children,
  variant = 'primary',
  disabled = false,
  onClick,
  className = '',
  type = 'button',
}: {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  disabled?: boolean
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit'
}) {
  const base = 'inline-flex min-h-10 items-center justify-center gap-2 rounded-lg px-4 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 disabled:cursor-not-allowed disabled:opacity-45'
  const variants = {
    primary: 'bg-brand-600 text-white hover:bg-brand-700 disabled:hover:bg-brand-600',
    secondary: 'border border-line bg-white text-ink hover:border-brand-500 hover:bg-brand-50',
  }

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}

function StatusBadge({ status }: { status: ProductStatus }) {
  const styles: Record<ProductStatus, string> = {
    Active: 'bg-emerald-50 text-emerald-700 ring-emerald-600/15',
    'Low stock': 'bg-amber-50 text-amber-700 ring-amber-600/15',
    Draft: 'bg-slate-100 text-slate-600 ring-slate-500/15',
    'Out of stock': 'bg-rose-50 text-rose-700 ring-rose-600/15',
  }

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${styles[status]}`}>
      <span className="size-1.5 rounded-full bg-current" />
      {status}
    </span>
  )
}

function Sidebar({ mobile = false }: { mobile?: boolean }) {
  const nav = [
    { label: 'Overview', icon: 'grid' as const },
    { label: 'Products', icon: 'box' as const, active: true },
    { label: 'Analytics', icon: 'chart' as const },
    { label: 'Customers', icon: 'users' as const },
  ]

  if (mobile) {
    return (
      <nav aria-label="Mobile navigation" className="flex gap-2 overflow-x-auto border-b border-line bg-white px-4 py-2 lg:hidden">
        {nav.map((item) => (
          <a
            aria-current={item.active ? 'page' : undefined}
            className={`inline-flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold ${item.active ? 'bg-brand-50 text-brand-700' : 'text-muted hover:bg-canvas hover:text-ink'}`}
            href="#products"
            key={item.label}
          >
            <Icon className="size-4" name={item.icon} />
            {item.label}
          </a>
        ))}
      </nav>
    )
  }

  return (
    <aside className="hidden min-h-[calc(100vh-72px)] w-60 shrink-0 flex-col border-r border-line bg-white px-4 py-6 lg:flex">
      <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">Workspace</p>
      <nav aria-label="Main navigation" className="grid gap-1">
        {nav.map((item) => (
          <a
            aria-current={item.active ? 'page' : undefined}
            className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${item.active ? 'bg-brand-50 text-brand-700' : 'text-slate-500 hover:bg-canvas hover:text-ink'}`}
            href="#products"
            key={item.label}
          >
            <Icon className="size-[18px]" name={item.icon} />
            {item.label}
            {item.active && <span className="ml-auto size-1.5 rounded-full bg-brand-600" />}
          </a>
        ))}
      </nav>
      <div className="mt-auto rounded-2xl bg-slate-50 p-4">
        <div className="mb-3 grid size-9 place-items-center rounded-xl bg-brand-100 text-brand-700">
          <Icon className="size-[18px]" name="sparkle" />
        </div>
        <p className="text-sm font-semibold">Need a hand?</p>
        <p className="mt-1 text-xs leading-5 text-muted">Our support team is one click away.</p>
        <a className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand-700 hover:text-brand-600" href="mailto:support@example.com">
          Get support <Icon className="size-3.5" name="arrow" />
        </a>
      </div>
      <a className="mt-4 flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-500 hover:bg-canvas hover:text-ink" href="#settings">
        <Icon className="size-[18px]" name="settings" />
        Settings
      </a>
    </aside>
  )
}

function ProductCard({
  product,
  onSelect,
}: {
  product: Product
  onSelect: (product: Product) => void
}) {
  const soldOut = product.status === 'Out of stock'

  return (
    <article className="group overflow-hidden rounded-card border border-line bg-white shadow-card transition-shadow hover:shadow-lg">
      <div className="relative aspect-[1.65] overflow-hidden bg-slate-100">
        <img
          alt={product.name}
          className="size-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
          loading="lazy"
          src={`https://images.unsplash.com/${product.image}?auto=format&fit=crop&w=900&q=80`}
        />
        <div className="absolute left-3 top-3">
          <StatusBadge status={product.status} />
        </div>
        <button
          aria-label={`View ${product.name} details`}
          className="absolute right-3 top-3 grid size-9 place-items-center rounded-full bg-white/90 text-slate-600 opacity-0 shadow transition-opacity hover:text-brand-700 focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-brand-600 group-hover:opacity-100"
          onClick={() => onSelect(product)}
          type="button"
        >
          <Icon className="size-4" name="arrow" />
        </button>
      </div>
      <div className="p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-xs font-medium text-muted">{product.category}</p>
            <h3 className="mt-1 truncate text-sm font-semibold tracking-tight text-ink">{product.name}</h3>
          </div>
          <p className="shrink-0 text-sm font-bold text-ink">{money.format(product.price)}</p>
        </div>
        <div className="mt-4 flex items-center justify-between border-t border-line pt-3">
          <p className="text-xs text-muted">
            {product.sales > 0 ? <><span className="font-semibold text-ink">{product.sales}</span> sold this month</> : 'Not published yet'}
          </p>
          <button
            className="inline-flex min-h-8 items-center gap-1.5 rounded-lg px-2.5 text-xs font-semibold text-brand-700 transition-colors hover:bg-brand-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 disabled:cursor-not-allowed disabled:opacity-40"
            disabled={soldOut}
            onClick={() => onSelect(product)}
            type="button"
          >
            {soldOut ? 'Unavailable' : 'Edit product'}
            {!soldOut && <Icon className="size-3.5" name="arrow" />}
          </button>
        </div>
      </div>
    </article>
  )
}

function ProductDialog({
  onClose,
  onAdd,
}: {
  onClose: () => void
  onAdd: (name: string, category: string, price: number) => void
}) {
  const [name, setName] = useState('')
  const [category, setCategory] = useState('Accessories')
  const [price, setPrice] = useState('')

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    onAdd(name.trim(), category, Number(price))
  }

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-slate-950/45 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <form
        aria-labelledby="add-product-title"
        aria-modal="true"
        className="w-full max-w-md rounded-2xl border border-line bg-white p-6 shadow-float sm:p-8"
        onSubmit={submit}
        role="dialog"
      >
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-700">New inventory</p>
            <h2 className="mt-2 text-xl font-bold tracking-tight" id="add-product-title">Add a product</h2>
            <p className="mt-1 text-sm text-muted">Create a product listing for your store.</p>
          </div>
          <button
            aria-label="Close dialog"
            className="grid size-9 place-items-center rounded-lg text-slate-500 hover:bg-canvas hover:text-ink focus-visible:outline-2 focus-visible:outline-brand-600"
            onClick={onClose}
            type="button"
          >
            <Icon className="size-4" name="close" />
          </button>
        </div>
        <label className="mb-4 grid gap-1.5 text-sm font-semibold" htmlFor="product-name">
          Product name
          <input
            autoFocus
            className="min-h-11 rounded-lg border border-line px-3 font-normal outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-100"
            id="product-name"
            onChange={(event) => setName(event.target.value)}
            placeholder="e.g. Studio Microphone"
            required
            value={name}
          />
        </label>
        <div className="mb-6 grid grid-cols-2 gap-3">
          <label className="grid gap-1.5 text-sm font-semibold" htmlFor="product-category">
            Category
            <select
              className="min-h-11 rounded-lg border border-line bg-white px-3 font-normal outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-100"
              id="product-category"
              onChange={(event) => setCategory(event.target.value)}
              value={category}
            >
              {categories.filter((item) => item !== 'All products').map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>
          <label className="grid gap-1.5 text-sm font-semibold" htmlFor="product-price">
            Price
            <input
              className="min-h-11 rounded-lg border border-line px-3 font-normal outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-100"
              id="product-price"
              min="0.01"
              onChange={(event) => setPrice(event.target.value)}
              placeholder="99.00"
              required
              step="0.01"
              type="number"
              value={price}
            />
          </label>
        </div>
        <div className="flex justify-end gap-2">
          <DashboardButton onClick={onClose} variant="secondary">Cancel</DashboardButton>
          <DashboardButton type="submit"><Icon className="size-4" name="plus" />Add product</DashboardButton>
        </div>
      </form>
    </div>
  )
}

function Dashboard() {
  const [products, setProducts] = useState(initialProducts)
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All products')
  const [dialogOpen, setDialogOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    return products.filter((product) => {
      const matchesCategory = category === 'All products' || product.category === category
      const matchesQuery =
        !normalizedQuery ||
        product.name.toLowerCase().includes(normalizedQuery) ||
        product.category.toLowerCase().includes(normalizedQuery)
      return matchesCategory && matchesQuery
    })
  }, [category, products, query])

  function addProduct(name: string, productCategory: string, price: number) {
    setProducts((current) => [
      {
        id: `product-${Date.now()}`,
        name,
        category: productCategory,
        price,
        status: 'Active',
        image: 'photo-1498050108023-c5249f4df085',
        sales: 0,
      },
      ...current,
    ])
    setDialogOpen(false)
  }

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <header className="sticky top-0 z-30 flex h-[72px] items-center justify-between border-b border-line bg-white/95 px-4 backdrop-blur sm:px-6 lg:px-8">
        <a className="flex items-center gap-3" href="#dashboard" aria-label="Form & Function home">
          <span className="grid size-9 place-items-center rounded-xl bg-brand-600 text-white shadow-sm">
            <Icon className="size-[19px]" name="box" />
          </span>
          <span className="text-sm font-bold tracking-tight sm:text-base">form<span className="text-brand-600">&</span>function</span>
        </a>
        <div className="hidden w-full max-w-sm px-6 md:block">
          <label className="relative block">
            <span className="sr-only">Search products</span>
            <Icon className="pointer-events-none absolute left-3 top-1/2 size-[17px] -translate-y-1/2 text-slate-400" name="search" />
            <input
              className="h-10 w-full rounded-lg border border-line bg-canvas/70 pl-10 pr-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-100"
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search products..."
              value={query}
            />
          </label>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden text-right sm:block">
            <span className="block text-xs font-semibold">Olivia Rhye</span>
            <span className="block text-[10px] text-muted">Store admin</span>
          </span>
          <span className="grid size-9 place-items-center rounded-full bg-[#f2ddd2] text-xs font-bold text-[#8b5541]">OR</span>
        </div>
      </header>
      <Sidebar mobile />
      <div className="lg:grid lg:grid-cols-[240px_minmax(0,1fr)]">
        <Sidebar />
        <main className="min-w-0 px-4 py-6 sm:px-6 sm:py-8 lg:px-shell lg:py-9" id="dashboard">
          <div className="mx-auto max-w-[1360px]">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-semibold text-muted">Tuesday, November 3, 2026</p>
                <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-[30px]">Product inventory</h1>
                <p className="mt-1.5 text-sm text-muted">Manage the products in your storefront.</p>
              </div>
              <DashboardButton onClick={() => setDialogOpen(true)}>
                <Icon className="size-4" name="plus" />
                Add product
              </DashboardButton>
            </div>
            <section aria-label="Store overview" className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              {[
                { label: 'Total products', value: products.length.toString(), change: '+2 this month', icon: 'box' as const },
                { label: 'Active listings', value: products.filter((product) => product.status === 'Active').length.toString(), change: 'Across 4 categories', icon: 'grid' as const },
                { label: 'Units sold', value: '391', change: '+12.8% this month', icon: 'chart' as const },
                { label: 'Inventory value', value: '$18,420', change: 'At retail price', icon: 'sparkle' as const },
              ].map((stat) => (
                <article className="rounded-card border border-line bg-white p-4 shadow-card sm:p-5" key={stat.label}>
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-xs font-medium text-muted sm:text-sm">{stat.label}</p>
                    <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-700">
                      <Icon className="size-4" name={stat.icon} />
                    </span>
                  </div>
                  <p className="mt-3 text-xl font-bold tracking-tight sm:text-2xl">{stat.value}</p>
                  <p className="mt-1 text-[10px] font-medium text-emerald-700 sm:text-xs">{stat.change}</p>
                </article>
              ))}
            </section>
            <section className="mt-9" id="products">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <h2 className="text-lg font-bold tracking-tight">All products <span className="ml-1 text-sm font-medium text-muted">{filteredProducts.length}</span></h2>
                  <p className="mt-1 text-xs text-muted">A clear view of everything in your catalog.</p>
                </div>
                <div className="flex items-center gap-2">
                  <label className="relative min-w-0 flex-1 md:hidden">
                    <span className="sr-only">Search products</span>
                    <Icon className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" name="search" />
                    <input
                      className="h-10 w-full rounded-lg border border-line bg-white pl-9 pr-3 text-sm outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-100"
                      onChange={(event) => setQuery(event.target.value)}
                      placeholder="Search..."
                      value={query}
                    />
                  </label>
                  <label className="sr-only" htmlFor="category-filter">Filter by category</label>
                  <span className="inline-flex h-10 items-center gap-2 rounded-lg border border-line bg-white px-3 text-xs font-semibold text-slate-600">
                    <Icon className="size-4" name="filter" />
                    <select
                      className="max-w-[120px] bg-transparent outline-none"
                      id="category-filter"
                      onChange={(event) => setCategory(event.target.value)}
                      value={category}
                    >
                      {categories.map((item) => <option key={item}>{item}</option>)}
                    </select>
                  </span>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 sm:gap-5">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} onSelect={setSelectedProduct} product={product} />
                ))}
              </div>
              {filteredProducts.length === 0 && (
                <div className="mt-5 rounded-card border border-dashed border-slate-300 bg-white px-6 py-14 text-center">
                  <p className="font-semibold">No products match your search</p>
                  <p className="mt-1 text-sm text-muted">Try another name or category.</p>
                </div>
              )}
            </section>
            <footer className="mt-9 flex flex-col justify-between gap-2 border-t border-line pt-4 text-[11px] text-muted sm:flex-row">
              <span>Showing {filteredProducts.length} of {products.length} products</span>
              <span>Inventory synced just now</span>
            </footer>
          </div>
        </main>
      </div>
      {dialogOpen && <ProductDialog onAdd={addProduct} onClose={() => setDialogOpen(false)} />}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-slate-950/45 p-4 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedProduct(null)
          }}
        >
          <section aria-labelledby="product-details-title" aria-modal="true" className="w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-float" role="dialog">
            <img
              alt={selectedProduct.name}
              className="aspect-[1.8] w-full object-cover"
              src={`https://images.unsplash.com/${selectedProduct.image}?auto=format&fit=crop&w=900&q=80`}
            />
            <div className="p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-medium text-muted">{selectedProduct.category}</p>
                  <h2 className="mt-1 text-lg font-bold" id="product-details-title">{selectedProduct.name}</h2>
                </div>
                <StatusBadge status={selectedProduct.status} />
              </div>
              <p className="mt-4 text-2xl font-bold">{money.format(selectedProduct.price)}</p>
              <p className="mt-2 text-sm text-muted">{selectedProduct.sales} units sold this month.</p>
              <div className="mt-5 flex justify-end">
                <DashboardButton onClick={() => setSelectedProduct(null)} variant="secondary">Close</DashboardButton>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  )
}

export default Dashboard
