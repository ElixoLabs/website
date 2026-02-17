'use client';
import React from 'react';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { BsLinkedin, BsTwitterX } from 'react-icons/bs';
import Button from '@/components/ui/Button';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

const homeLinks = [
  { label: 'Services', href: '/#services' },
  { label: 'About', href: '/#about' },
  { label: 'Process', href: '/#process' },
  { label: 'FAQ', href: '/#faq' },
];

const allPagesLinks = [
  { label: 'Contact', href: '/contact' },
  { label: 'Start a Project', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy' },
];

const socials = [
  { icon: BsTwitterX, label: 'X', href: 'https://x.com/elixolabs' },
  { icon: BsLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/company/elixolabs' }
];

const Footer: React.FC = () => {
  return (
    <footer className="relative flex flex-col items-center justify-center px-5 md:px-10 pt-10 md:pt-16 pb-0 overflow-hidden w-full">
      <motion.div
        className="flex flex-col items-center gap-0 max-w-sm md:max-w-7xl w-full relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        <div className="relative w-full border border-base-400">
          <div className="absolute -top-1.25 -left-1.25 w-2.5 h-2.5 bg-white rounded-xs shadow-dot z-20" />
          <div className="absolute -top-1.25 -right-1.25 w-2.5 h-2.5 bg-white rounded-xs shadow-dot z-20" />
          <div className="absolute -bottom-1.25 -left-1.25 w-2.5 h-2.5 bg-white rounded-xs shadow-dot z-20" />
          <div className="absolute -bottom-1.25 -right-1.25 w-2.5 h-2.5 bg-white rounded-xs shadow-dot z-20" />

          <div className="absolute -left-12 md:-left-20 top-0 w-12 md:w-20 h-px bg-linear-to-l from-base-400 to-transparent" />
          <div className="absolute -right-12 md:-right-20 top-0 w-12 md:w-20 h-px bg-linear-to-r from-base-400 to-transparent" />
          <div className="absolute -left-12 md:-left-20 bottom-0 w-12 md:w-20 h-px bg-linear-to-l from-base-400 to-transparent" />
          <div className="absolute -right-12 md:-right-20 bottom-0 w-12 md:w-20 h-px bg-linear-to-r from-base-400 to-transparent" />

          <div className="absolute left-0 -top-16 md:-top-28 w-px h-16 md:h-28 bg-linear-to-t from-base-400 to-transparent" />
          <div className="absolute right-0 -top-16 md:-top-28 w-px h-16 md:h-28 bg-linear-to-t from-base-400 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-0">
            <motion.div
              variants={itemVariants}
              className="relative flex flex-col gap-7 p-8 md:p-10"
            >
              <div className="hidden md:block absolute top-0 bottom-0 right-0 w-px bg-base-400" />
              <span className="text-xl font-bold text-dark-200 tracking-tight">ElixoLabs</span>
              <p className="text-sm text-base-900 max-w-xs">
                AI-Native Product Engineering
              </p>
              <div className="flex flex-col gap-3.5">
                <Button href="/contact" variant="primary" className="w-fit">
                  Start a Project
                </Button>
                <a
                  href="mailto:hello@elixolabs.com"
                  className="text-sm text-base-500 hover:text-base-900 transition-colors"
                >
                  hello@elixolabs.com
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative flex flex-col gap-5 p-8 md:p-10 border-t md:border-t-0 border-base-400"
            >
              <div className="hidden md:block absolute top-0 bottom-0 right-0 w-px bg-base-400" />
              <h3 className="text-sm font-semibold text-dark-200">Home</h3>
              <ul className="flex flex-col gap-3">
                {homeLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-base-700 hover:text-dark-200 transition-colors flex items-center gap-2"
                    >
                      {link.label}
                      {/* {link.badge && (
                        <span className="bg-dark-200 text-white text-[10px] font-medium rounded-full px-2 py-0.5">
                          {link.badge}
                        </span>
                      )} */}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative flex flex-col gap-5 p-8 md:p-10 border-t md:border-t-0 border-base-400"
            >
              <div className="hidden md:block absolute top-0 bottom-0 right-0 w-px bg-base-400" />
              <h3 className="text-sm font-semibold text-dark-200">All Pages</h3>
              <ul className="flex flex-col gap-3">
                {allPagesLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-base-700 hover:text-dark-200 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-5 p-8 md:p-10 border-t md:border-t-0 border-base-400"
            >
              <h3 className="text-sm font-semibold text-dark-200">Connect</h3>
              <div className="flex items-center gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-sm hover:scale-110 transition-transform duration-300"
                  >
                    <social.icon className="w-4 h-4 text-dark-200" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          variants={itemVariants}
          className="w-full flex flex-col md:flex-row items-center justify-end py-6 px-4 gap-4"
        >
          <div className="flex items-center gap-6">
            <Link href="/terms" className="text-sm text-base-500 hover:text-dark-200 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/privacy" className="text-sm text-base-500 hover:text-dark-200 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
