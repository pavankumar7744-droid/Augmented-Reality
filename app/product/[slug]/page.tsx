import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Check, Ruler, Smartphone } from 'lucide-react'
import { getProduct, products, formatPrice } from '@/lib/products'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { CartDrawer } from '@/components/cart-drawer'
import { ProductGallery } from '@/components/product-gallery'
import { ProductCard } from '@/components/product-card'
import { AddToBag } from '@/components/add-to-bag'

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = getProduct(slug)
  if (!product) return { title: 'Not found — Maru' }
  return {
    title: `${product.name} — Maru`,
    description: product.tagline,
  }
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = getProduct(slug)
  if (!product) notFound()

  const related = products.filter((p) => p.id !== product.id).slice(0, 3)

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:py-12">
          <Link
            href="/shop"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            Back to shop
          </Link>

          <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:gap-14">
            <ProductGallery product={product} />

            <div className="lg:py-2">
              <p className="text-sm font-medium uppercase tracking-wider text-accent">
                {product.collection}
              </p>
              <h1 className="mt-2 text-balance font-heading text-4xl tracking-tight sm:text-5xl">
                {product.name}
              </h1>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
                {product.tagline}
              </p>
              <p className="mt-6 font-heading text-3xl">{formatPrice(product.price)}</p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <AddToBag product={product} className="px-8 py-3.5" />
                <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-3 text-sm text-muted-foreground">
                  <Smartphone className="size-4 text-accent" aria-hidden="true" />
                  Use “View in your room” above on mobile
                </span>
              </div>

              <p className="mt-6 leading-relaxed text-foreground/80">
                {product.description}
              </p>

              <div className="mt-8 border-t border-border pt-8">
                <h2 className="font-heading text-lg">Details</h2>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {product.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2.5 text-sm text-foreground/80">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 border-t border-border pt-8">
                <h2 className="flex items-center gap-2 font-heading text-lg">
                  <Ruler className="size-4 text-muted-foreground" aria-hidden="true" />
                  Dimensions
                </h2>
                <dl className="mt-4 grid grid-cols-3 gap-4">
                  {[
                    { label: 'Width', value: product.dimensions.width },
                    { label: 'Depth', value: product.dimensions.depth },
                    { label: 'Height', value: product.dimensions.height },
                  ].map((d) => (
                    <div key={d.label} className="rounded-lg bg-muted/60 px-4 py-3">
                      <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                        {d.label}
                      </dt>
                      <dd className="mt-1 font-medium tabular-nums">{d.value}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-4 text-sm text-muted-foreground">
                  Materials: {product.materials}
                </p>
              </div>
            </div>
          </div>

          {/* Related */}
          <section className="mt-20 border-t border-border pt-14 lg:mt-28">
            <h2 className="font-heading text-2xl tracking-tight sm:text-3xl">
              You may also like
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
      <CartDrawer />
    </div>
  )
}
