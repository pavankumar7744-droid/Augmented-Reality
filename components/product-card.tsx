import Link from 'next/link'
import { Box } from 'lucide-react'
import type { Product } from '@/lib/products'
import { formatPrice } from '@/lib/products'
import { ModelViewer } from '@/components/model-viewer'
import { AddToBag } from '@/components/add-to-bag'

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group relative flex flex-col">
      <Link
        href={`/product/${product.slug}`}
        className="relative block aspect-square overflow-hidden rounded-xl bg-muted"
      >
        <span className="absolute left-3 top-3 z-10 inline-flex items-center gap-1 rounded-full bg-card/85 px-2.5 py-1 text-[0.7rem] font-medium text-foreground backdrop-blur">
          <Box className="size-3" aria-hidden="true" />
          3D / AR
        </span>
        <div className="h-full w-full transition-transform duration-500 group-hover:scale-[1.03]">
          <ModelViewer
            src={product.model}
            alt={`3D model of ${product.name}`}
            cameraOrbit={product.cameraOrbit}
            autoRotate={false}
          />
        </div>
      </Link>

      <div className="absolute right-3 top-3 z-10 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <AddToBag product={product} variant="icon" />
      </div>

      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <Link
            href={`/product/${product.slug}`}
            className="font-medium leading-tight transition-colors hover:text-primary"
          >
            {product.name}
          </Link>
          <p className="mt-0.5 text-sm text-muted-foreground">{product.category}</p>
        </div>
        <p className="font-medium tabular-nums">{formatPrice(product.price)}</p>
      </div>
    </article>
  )
}
