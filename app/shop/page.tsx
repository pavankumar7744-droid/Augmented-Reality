import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { CartDrawer } from '@/components/cart-drawer'
import { ShopBrowser } from '@/components/shop-browser'

export const metadata: Metadata = {
  title: 'Shop — Maru',
  description:
    'Browse the Maru collection of furniture and home decor. Every piece can be previewed in 3D and placed in your room with AR.',
}

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>
}) {
  const { category } = await searchParams

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:py-16">
          <header className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-wider text-accent">
              The collection
            </p>
            <h1 className="mt-2 text-balance font-heading text-4xl tracking-tight sm:text-5xl">
              Every piece, ready to view in your room
            </h1>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Tap any product to spin it in 3D, switch finishes, and place it at
              true scale in your space with augmented reality.
            </p>
          </header>

          <div className="mt-12">
            <ShopBrowser initialCategory={category ?? 'All'} />
          </div>
        </div>
      </main>
      <SiteFooter />
      <CartDrawer />
    </div>
  )
}
