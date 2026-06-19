'use client'

import { useMemo, useState } from 'react'
import { products } from '@/lib/products'
import { ProductCard } from '@/components/product-card'

const categories = ['All', ...Array.from(new Set(products.map((p) => p.category)))]

export function ShopBrowser({ initialCategory = 'All' }: { initialCategory?: string }) {
  const normalized = categories.includes(initialCategory) ? initialCategory : 'All'
  const [active, setActive] = useState(normalized)

  const filtered = useMemo(
    () => (active === 'All' ? products : products.filter((p) => p.category === active)),
    [active],
  )

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-full border px-4 py-2 text-sm transition-colors ${
              active === cat
                ? 'border-primary bg-primary text-primary-foreground'
                : 'border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <p className="mt-6 text-sm text-muted-foreground">
        {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
      </p>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
