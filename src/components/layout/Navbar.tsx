'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/ui/Button';

const navLinks = [
  { label: 'Services', href: '/#services' },
  { label: 'Process', href: '/#process' },
  { label: 'About', href: '/#about' },
  { label: 'FAQ', href: '/#faq' },
];

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className="sticky top-0 left-0 w-full z-50 flex items-center justify-between px-5 md:px-8 py-4 bg-dark-300 border-b border-white/5">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image src={'/logo.png'} alt="ElixoLabs Logo" width={32} height={32} className="w-7 h-7" />
          <span className="text-xl font-bold text-white tracking-tight">Elixo<span className='font-light'>Labs</span></span>
        </Link>

        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 ${pathname === link.href ? 'text-white' : 'text-base-600 hover:text-white'
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4 shrink-0">
          <div className="hidden md:flex items-center gap-3">
            <Button href="/contact" variant="secondary">
              Start a Project
            </Button>
          </div>

          <button
            className="md:hidden relative z-60 w-12 h-12 flex items-center justify-center bg-white rounded-full transition-transform active:scale-95 shrink-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <div className="relative w-5 h-3.5">
              <span
                className={`absolute left-0 h-0.5 bg-dark-300 rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'top-1.5 w-5 rotate-45' : 'top-0 w-5'
                  }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-0.5 bg-dark-300 rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'w-0 opacity-0' : 'w-5 opacity-100'
                  }`}
              />
              <span
                className={`absolute right-0 h-0.5 bg-dark-300 rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'top-1.5 w-5 -rotate-45' : 'top-3 w-3'
                  }`}
              />
            </div>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-dark-300 flex flex-col justify-between px-6 pt-28 pb-10 overflow-y-auto"
          >
            <div className="flex flex-col gap-6 w-full mt-4">
              {navLinks.map((link) => (
                <div key={link.label} className="border-b border-white/10 pb-4">
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-4xl font-semibold tracking-tight transition-colors ${pathname === link.href ? 'text-white' : 'text-base-800 hover:text-white'
                      }`}
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 w-full mt-12">
              <div onClick={() => setIsMobileMenuOpen(false)}>
                <Button href="/contact" variant="secondary" className="w-full py-4 text-lg">
                  Start a Project
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
