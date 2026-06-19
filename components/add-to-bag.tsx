'use client'

import { Plus } from 'lucide-react'
import { useCart } from '@/components/cart-context'
import type { Product } from '@/lib/products'
import { cn } from '@/lib/utils'

export function AddToBag({
  product,
  variant = 'solid',
  className,
  label = 'Add to bag',
}: {
  product: Product
  variant?: 'solid' | 'outline' | 'icon'
  className?: string
  label?: string
}) {
  const { add } = useCart()

  if (variant === 'icon') {
    return (
      <button
        onClick={(e) => {
          e.preventDefault()
          add(product)
        }}
        aria-label={`Add ${product.name} to bag`}
        className={cn(
          'flex size-10 items-center justify-center rounded-full bg-card/90 text-foreground shadow-sm backdrop-blur transition-colors hover:bg-primary hover:text-primary-foreground',
          className,
        )}
      >
        <Plus className="size-5" />
      </button>
    )
  }

  return (
    <button
      onClick={() => add(product)}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors',
        variant === 'solid'
          ? 'bg-primary text-primary-foreground hover:bg-primary/90'
          : 'border border-foreground/20 text-foreground hover:border-foreground/40',
        className,
      )}
    >
      {label}
    </button>
  )
}
