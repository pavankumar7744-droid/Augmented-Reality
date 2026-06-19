import Image from 'next/image'
import { MousePointerClick, ScanLine, Sparkles } from 'lucide-react'

const steps = [
  {
    icon: MousePointerClick,
    title: 'Pick a piece',
    body: 'Browse the collection and open any product. Every item ships with a true-to-life 3D model.',
  },
  {
    icon: ScanLine,
    title: 'Tap “View in your room”',
    body: 'On a phone or tablet, point your camera at the floor. Maru drops the piece in at exact scale.',
  },
  {
    icon: Sparkles,
    title: 'Walk around it',
    body: 'Move closer, step back, change the finish, and see how it sits in your own light before you buy.',
  },
]

export function HowArWorks() {
  return (
    <section id="how-ar-works" className="scroll-mt-20 bg-card">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-28">
        <div className="relative order-last aspect-[4/5] overflow-hidden rounded-2xl bg-muted lg:order-first">
          <Image
            src="/ar-room.png"
            alt="A phone showing a lounge chair placed in a living room with augmented reality"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="max-w-lg">
          <p className="text-sm font-medium uppercase tracking-wider text-accent">
            How it works
          </p>
          <h2 className="mt-3 text-balance font-heading text-4xl leading-tight tracking-tight sm:text-5xl">
            Confidence before checkout.
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Returns are the worst part of buying furniture online. Maru removes
            the guesswork by letting you preview every piece in your real space,
            at the size it will actually be.
          </p>
          <ol className="mt-10 flex flex-col gap-8">
            {steps.map((step, i) => (
              <li key={step.title} className="flex gap-5">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                  <step.icon className="size-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="flex items-center gap-2 font-medium">
                    <span className="font-heading text-muted-foreground">0{i + 1}</span>
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
