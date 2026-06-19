import Link from 'next/link'
import { ArrowRight, ScanLine } from 'lucide-react'
import { products } from '@/lib/products'
import { ModelViewer } from '@/components/model-viewer'

export function Hero() {
  const hero = products[0]

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-12 pt-12 sm:px-8 lg:grid-cols-2 lg:gap-8 lg:pb-20 lg:pt-20">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground">
            <ScanLine className="size-3.5 text-accent" aria-hidden="true" />
            Augmented reality, right in your browser
          </span>
          <h1 className="mt-6 text-balance font-heading text-5xl leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            See it in your room before it&apos;s ever in your room.
          </h1>
          <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
            Maru is a furniture studio built for the way you actually shop.
            Place any piece at true scale in your space, walk around it, and
            judge it in your own light — no app to download.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Explore the collection
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href={`/product/${hero.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-foreground/40"
            >
              Try it in AR
            </Link>
          </div>
          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              { value: 'True scale', label: 'Centimetre-accurate' },
              { value: 'No app', label: 'Works in your browser' },
              { value: '3D + AR', label: 'On every product' },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="font-heading text-xl">{stat.value}</dt>
                <dd className="mt-1 text-xs text-muted-foreground">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-b from-secondary to-muted">
            <ModelViewer
              src={hero.model}
              alt={`3D model of the ${hero.name}`}
              cameraOrbit={hero.cameraOrbit}
              autoRotate
            />
            <div className="pointer-events-none absolute bottom-4 left-4 rounded-lg bg-card/85 px-4 py-2.5 backdrop-blur">
              <p className="text-sm font-medium">{hero.name}</p>
              <p className="text-xs text-muted-foreground">Drag to spin · live 3D</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
