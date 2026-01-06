'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Why Me', href: '#why-work' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3"
          >
            <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-blue-500 ring-offset-2 ring-offset-transparent">
              <Image
                src="/profile.png"
                alt="Muhammad Zeshan Tahir"
                fill
                className="object-cover"
                priority
              />
            </div>
            <span className={`text-xl font-bold transition-colors hidden sm:block ${
              isScrolled
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text'
                : 'text-white'
            }`}>
              Zeshan
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors hover:text-blue-600 ${
                  isScrolled
                    ? 'text-gray-700'
                    : 'text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`font-medium transition-colors hover:text-blue-600 ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get In Touch
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

