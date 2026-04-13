'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { ArrowRight, Clock, MapPin, Shield, Waves, Wind, Anchor, Star, ChevronDown } from 'lucide-react'
import CollectionSection from '@/components/marketing/collection-section'
import { useCollections } from '@/hooks/use-collections'

const HERO_IMAGE = 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1400&q=80'
const SUP_IMAGE = 'https://images.unsplash.com/photo-1572698763710-d95c8f163f6a?w=800&q=80'
const BOAT_IMAGE = 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&q=80'
const LAKE_IMAGE = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80'

const rentalItems = [
  {
    title: 'Stand Up Paddleboards',
    subtitle: 'SUP Boards',
    description: 'Glide across the crystal-clear waters of Lake Zurich on one of our premium SUP boards. Perfect for all levels.',
    image: SUP_IMAGE,
    href: '/products',
    tag: 'From CHF 25/hr',
  },
  {
    title: 'Boats & Pedal Boats',
    subtitle: 'Watercraft',
    description: 'Explore Lake Zurich at your own pace in one of our boats. Ideal for families, couples, or groups.',
    image: BOAT_IMAGE,
    href: '/products',
    tag: 'From CHF 40/hr',
  },
]

const features = [
  {
    icon: MapPin,
    title: 'Zurich Lakeside',
    description: 'Conveniently located right on the shores of Lake Zurich — easy access, no hassle.',
  },
  {
    icon: Clock,
    title: 'Flexible Rentals',
    description: 'Rent by the hour or the full day. Book online in minutes and pick up on arrival.',
  },
  {
    icon: Shield,
    title: 'Safety First',
    description: 'All rentals include life jackets and a brief safety orientation. Your wellbeing is our priority.',
  },
  {
    icon: Wind,
    title: 'All Skill Levels',
    description: 'Whether you\'re a first-timer or an experienced paddler, we have the right board for you.',
  },
]

const testimonials = [
  {
    name: 'Sophie M.',
    location: 'Zürich',
    rating: 5,
    text: 'Absolutely magical morning on the SUP board. The lake was so calm and the staff were incredibly helpful. Will definitely be back!',
  },
  {
    name: 'Thomas K.',
    location: 'Basel',
    rating: 5,
    text: 'Rented a pedal boat with my family for the afternoon. The kids loved it and everything was in perfect condition. Highly recommend!',
  },
  {
    name: 'Laura B.',
    location: 'Zürich',
    rating: 5,
    text: 'Best way to spend a summer evening in Zurich. The SUP boards are top quality and the booking process was super easy.',
  },
]

export default function HomePage() {
  const { data: collections, isLoading } = useCollections()
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false)

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newsletterEmail.trim()) return
    setNewsletterSubmitted(true)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={HERO_IMAGE}
            alt="Stand up paddleboarding on Lake Zurich"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(210,50%,10%)]/80 via-[hsl(210,50%,10%)]/50 to-transparent" />
        </div>

        <div className="relative container-custom py-24 lg:py-32">
          <div className="max-w-xl space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5">
              <MapPin className="h-3.5 w-3.5 text-white" />
              <span className="text-xs text-white font-medium uppercase tracking-widest">Lake Zurich, Switzerland</span>
            </div>
            <h1 className="text-display font-heading font-semibold text-white text-balance leading-tight">
              Explore Lake Zürich on the Water
            </h1>
            <p className="text-lg text-white/80 max-w-md leading-relaxed">
              Rent premium stand up paddleboards and boats for an unforgettable experience on the most beautiful lake in Switzerland.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-accent text-white px-8 py-3.5 text-sm font-semibold uppercase tracking-wide hover:bg-accent/90 transition-colors"
                prefetch={true}
              >
                Book a Rental
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 border border-white/40 text-white px-8 py-3.5 text-sm font-semibold uppercase tracking-wide hover:bg-white/10 transition-colors"
              >
                How It Works
                <ChevronDown className="h-4 w-4" />
              </a>
            </div>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-8 pt-4 border-t border-white/20">
              <div>
                <p className="text-2xl font-heading font-semibold text-white">500+</p>
                <p className="text-xs text-white/60 uppercase tracking-wide mt-0.5">Happy customers</p>
              </div>
              <div>
                <p className="text-2xl font-heading font-semibold text-white">4.9★</p>
                <p className="text-xs text-white/60 uppercase tracking-wide mt-0.5">Average rating</p>
              </div>
              <div>
                <p className="text-2xl font-heading font-semibold text-white">CHF 25</p>
                <p className="text-xs text-white/60 uppercase tracking-wide mt-0.5">Starting from / hr</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rental Options */}
      <section id="how-it-works" className="py-section bg-muted/40">
        <div className="container-custom">
          <div className="text-center mb-14 space-y-3 animate-fade-in-up">
            <p className="text-xs uppercase tracking-[0.25em] text-accent font-medium">What we offer</p>
            <h2 className="text-h2 font-heading font-semibold">Choose Your Adventure</h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Whether you prefer the tranquility of paddleboarding or the freedom of a boat, we have the perfect option for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {rentalItems.map((item) => (
              <div key={item.title} className="group bg-background rounded-sm overflow-hidden border border-border hover:border-accent/40 transition-colors shadow-sm hover:shadow-md">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-white text-xs font-semibold uppercase tracking-wide px-3 py-1.5 rounded-full">
                      {item.tag}
                    </span>
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <p className="text-xs uppercase tracking-widest text-accent font-medium">{item.subtitle}</p>
                  <h3 className="text-h3 font-heading font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide link-underline pt-1 text-accent"
                    prefetch={true}
                  >
                    View Options
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collections (dynamic) */}
      {isLoading ? null : collections && collections.length > 0 ? (
        <>
          {collections.map((collection: { id: string; handle: string; title: string; metadata?: Record<string, unknown> }, index: number) => (
            <CollectionSection
              key={collection.id}
              collection={collection}
              alternate={index % 2 === 1}
            />
          ))}
        </>
      ) : null}

      {/* Why Choose Us */}
      <section className="py-section">
        <div className="container-custom">
          <div className="text-center mb-14 space-y-3">
            <p className="text-xs uppercase tracking-[0.25em] text-accent font-medium">Why us</p>
            <h2 className="text-h2 font-heading font-semibold">The Zürich Water Experience</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center space-y-3 group">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors mx-auto">
                  <feature.icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-semibold text-base">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lake Zurich Banner */}
      <section className="relative overflow-hidden">
        <div className="relative h-80 lg:h-[420px]">
          <Image
            src={LAKE_IMAGE}
            alt="Lake Zurich panorama"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[hsl(210,50%,10%)]/60" />
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="space-y-4 px-4">
              <Waves className="h-10 w-10 text-white/60 mx-auto" strokeWidth={1} />
              <h2 className="text-h2 font-heading font-semibold text-white text-balance">
                Zürichsee wartet auf dich
              </h2>
              <p className="text-white/70 max-w-md mx-auto">
                Lake Zurich is waiting for you. Open May – October, 7 days a week.
              </p>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-white text-[hsl(210,50%,15%)] px-8 py-3.5 text-sm font-semibold uppercase tracking-wide hover:bg-accent hover:text-white transition-colors mt-2"
                prefetch={true}
              >
                Reserve Your Spot
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-section bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-14 space-y-3">
            <p className="text-xs uppercase tracking-[0.25em] text-accent font-medium">Reviews</p>
            <h2 className="text-h2 font-heading font-semibold">What Our Customers Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-background border border-border rounded-sm p-6 space-y-4 hover:border-accent/30 transition-colors">
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground italic">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                    <MapPin className="h-3 w-3" /> {t.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-section border-y bg-muted/10">
        <div className="container-custom">
          <div className="text-center mb-14 space-y-3">
            <p className="text-xs uppercase tracking-[0.25em] text-accent font-medium">Simple process</p>
            <h2 className="text-h2 font-heading font-semibold">How to Rent</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-8 relative">
            {/* Connector line desktop */}
            <div className="hidden sm:block absolute top-6 left-1/6 right-1/6 h-px bg-border" />
            {[
              { step: '01', icon: Anchor, title: 'Choose & Book', desc: 'Pick your SUP board or boat and select your rental duration online.' },
              { step: '02', icon: MapPin, title: 'Arrive at the Lake', desc: 'Head to our station on the shores of Lake Zurich — we\'ll have everything ready for you.' },
              { step: '03', icon: Waves, title: 'Hit the Water', desc: 'Receive your gear, get a quick safety briefing, and enjoy the lake!' },
            ].map((s) => (
              <div key={s.step} className="text-center space-y-3 relative">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent text-white text-sm font-bold mx-auto relative z-10">
                  {s.step}
                </div>
                <h3 className="font-heading font-semibold">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-section">
        <div className="container-custom max-w-xl text-center">
          <Waves className="h-8 w-8 text-accent mx-auto mb-4" strokeWidth={1.5} />
          <h2 className="text-h2 font-heading font-semibold">Stay in the Loop</h2>
          <p className="mt-3 text-muted-foreground">
            Get early access to seasonal openings, special offers, and lakeside events in Zürich.
          </p>
          {newsletterSubmitted ? (
            <p className="mt-8 text-accent font-semibold">🎉 Thanks! We&apos;ll be in touch soon.</p>
          ) : (
            <form className="mt-8 flex gap-2" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 border-b border-foreground/30 bg-transparent px-1 py-3 text-sm placeholder:text-muted-foreground focus:border-accent focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="bg-accent text-white px-6 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-accent/90 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
