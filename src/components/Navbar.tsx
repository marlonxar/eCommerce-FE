"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
  { href: "/", label: "Inicio" },
  { href: "/cloth", label: "Cloth" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
  { href: "/cart", label: "Cart" },
  { href: "/login", label: "Login" },
  { href: "/register", label: "Register" },
  { href: "/profile", label: "Profile" },
  { href: "/terms", label: "Terms and conditions" },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">
          Chemas Store
        </Link>

        <div className="flex gap-6">
          {links.map(({ href, label }) => {
            const active = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className={`transition-colors ${
                  active
                    ? "text-blue-600 font-semibold"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {label}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
