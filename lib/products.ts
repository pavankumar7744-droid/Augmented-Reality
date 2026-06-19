export type Product = {
  id: string
  slug: string
  name: string
  category: string
  collection: string
  price: number
  tagline: string
  description: string
  details: string[]
  dimensions: { width: string; depth: string; height: string }
  materials: string
  model: string
  /** Vertical framing for the 3D viewer, larger = model sits higher in frame */
  cameraOrbit: string
  featured: boolean
}

export const products: Product[] = [
  {
    id: 'mira-sofa',
    slug: 'mira-velvet-sofa',
    name: 'Mira Velvet Sofa',
    category: 'Sofas',
    collection: 'The Lounge Edit',
    price: 2480,
    tagline: 'A low, sculptural three-seater wrapped in deep pressed velvet.',
    description:
      'Mira is built around a single sweeping silhouette — a generous seat, a softly rolled back, and slim tapered legs in solid oak. Place it in your room to see exactly how the proportions settle against your walls.',
    details: [
      'Solid kiln-dried hardwood frame',
      'High-resilience foam with feather-wrapped cushions',
      'Removable, dry-clean velvet covers',
      'Available in three colourways via AR variants',
    ],
    dimensions: { width: '232 cm', depth: '96 cm', height: '78 cm' },
    materials: 'Pressed cotton velvet, solid oak',
    model: '/models/sofa.glb',
    cameraOrbit: '0deg 80deg 105%',
    featured: true,
  },
  {
    id: 'halden-chair',
    slug: 'halden-lounge-chair',
    name: 'Halden Lounge Chair',
    category: 'Chairs',
    collection: 'The Lounge Edit',
    price: 940,
    tagline: 'An enveloping accent chair with a fine sheen weave.',
    description:
      'The Halden pairs a relaxed recline with a tailored, piped edge. Its iridescent sheen fabric shifts with the light — switch finishes in AR to find the one that belongs in your space.',
    details: [
      'Sculpted plywood shell',
      'Sheen-weave upholstery with contrast piping',
      'Powder-coated steel base',
      'Multiple finishes selectable in AR',
    ],
    dimensions: { width: '78 cm', depth: '82 cm', height: '74 cm' },
    materials: 'Sheen-weave textile, steel',
    model: '/models/chair.glb',
    cameraOrbit: '0deg 78deg 100%',
    featured: true,
  },
  {
    id: 'atrium-lantern',
    slug: 'atrium-floor-lantern',
    name: 'Atrium Floor Lantern',
    category: 'Lighting',
    collection: 'Quiet Light',
    price: 620,
    tagline: 'A cast-metal floor lantern with a warm, diffused glow.',
    description:
      'Hand-finished metalwork and an aged patina make Atrium feel like an heirloom. Drop it beside a reading chair in AR to judge the scale before it arrives.',
    details: [
      'Cast and hand-patinated metal body',
      'Frosted glass diffuser',
      'Dimmable warm LED, 2700K',
      'Braided fabric cord',
    ],
    dimensions: { width: '34 cm', depth: '34 cm', height: '142 cm' },
    materials: 'Patinated metal, frosted glass',
    model: '/models/lantern.glb',
    cameraOrbit: '0deg 82deg 110%',
    featured: true,
  },
  {
    id: 'lustre-bowl',
    slug: 'lustre-centerpiece-bowl',
    name: 'Lustre Centerpiece Bowl',
    category: 'Decor',
    collection: 'The Table',
    price: 180,
    tagline: 'An iridescent glazed bowl that catches the room.',
    description:
      'A statement piece for a console or dining table. The pearlescent glaze plays with reflections — preview it on your own surface to see how the finish reads in your light.',
    details: [
      'Hand-thrown stoneware',
      'Iridescent reactive glaze',
      'Food safe, hand wash',
      'Each piece is unique',
    ],
    dimensions: { width: '38 cm', depth: '38 cm', height: '12 cm' },
    materials: 'Glazed stoneware',
    model: '/models/bowl.glb',
    cameraOrbit: '0deg 65deg 95%',
    featured: false,
  },
  {
    id: 'field-speaker',
    slug: 'field-audio-speaker',
    name: 'Field Audio Speaker',
    category: 'Audio',
    collection: 'Quiet Light',
    price: 410,
    tagline: 'A precision-machined portable speaker as objet.',
    description:
      'Brushed metal, knurled dials and leather detailing make Field as much a sculpture as a sound system. View it on your shelf in AR before committing.',
    details: [
      'Machined aluminium housing',
      'Full-range driver with passive radiator',
      'Leather carry strap',
      '24-hour battery',
    ],
    dimensions: { width: '26 cm', depth: '11 cm', height: '14 cm' },
    materials: 'Anodised aluminium, leather',
    model: '/models/speaker.glb',
    cameraOrbit: '0deg 75deg 90%',
    featured: false,
  },
  {
    id: 'stenmark-carafe',
    slug: 'stenmark-carafe',
    name: 'Stenmark Carafe',
    category: 'Decor',
    collection: 'The Table',
    price: 96,
    tagline: 'A clean-lined glass carafe for the everyday table.',
    description:
      'Minimal, weighty and beautifully balanced. Set Stenmark on your table in AR to see the proportions against your glassware.',
    details: [
      'Mouth-blown glass',
      'Silicone-sealed cap',
      '1.1 L capacity',
      'Dishwasher safe',
    ],
    dimensions: { width: '11 cm', depth: '11 cm', height: '26 cm' },
    materials: 'Borosilicate glass',
    model: '/models/carafe.glb',
    cameraOrbit: '0deg 75deg 90%',
    featured: false,
  },
]

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug)
}

export function formatPrice(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value)
}
