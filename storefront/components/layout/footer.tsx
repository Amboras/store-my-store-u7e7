'use client'

import Link from 'next/link'
import { MapPin, Phone, Mail } from 'lucide-react'
import { clearConsent } from '@/lib/cookie-consent'
import { usePolicies } from '@/hooks/use-policies'

const footerLinks = {
  rentals: [
    { label: 'All Rentals', href: '/products' },
    { label: 'SUP Boards', href: '/products' },
    { label: 'Boats & Pedal Boats', href: '/products' },
  ],
  help: [
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Getting Here', href: '/about' },
  ],
}

export default function Footer() {
  const { policies } = usePolicies()

  const companyLinks = [
    { label: 'About', href: '/about' },
  ]

  if (policies?.privacy_policy) {
    companyLinks.push({ label: 'Privacy Policy', href: '/privacy' })
  }
  if (policies?.terms_of_service) {
    companyLinks.push({ label: 'Terms of Service', href: '/terms' })
  }
  if (policies?.refund_policy) {
    companyLinks.push({ label: 'Refund Policy', href: '/refund-policy' })
  }
  if (policies?.cookie_policy) {
    companyLinks.push({ label: 'Cookie Policy', href: '/cookie-policy' })
  }

  return (
    <footer className="border-t bg-muted/30">
      <div className="container-custom py-section-sm">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="font-heading text-2xl font-semibold text-accent">
                ZüriWater
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
              Premium SUP board and boat rentals on the shores of Lake Zurich. Open May – October, 7 days a week.
            </p>
            <div className="mt-5 space-y-2">
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-accent flex-shrink-0" />
                Zürichsee, Zürich, Switzerland
              </p>
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-accent flex-shrink-0" />
                +41 44 000 00 00
              </p>
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-accent flex-shrink-0" />
                hello@zuriwater.ch
              </p>
            </div>
          </div>

          {/* Rentals Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-4">Rentals</h3>
            <ul className="space-y-3">
              {footerLinks.rentals.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-4">Help</h3>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} ZüriWater. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => {
                clearConsent()
                window.dispatchEvent(new Event('manage-cookies'))
              }}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Manage Cookies
            </button>
            <span className="text-xs text-muted-foreground">Powered by Amboras</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
