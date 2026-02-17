'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { IoChevronForwardOutline } from 'react-icons/io5';

type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'ghost' | 'dark';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  icon?: boolean;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const variantStyles: Record<
  ButtonVariant,
  { base: string; bg: string; hoverBg: string }
> = {
  primary: {
    base: 'text-white border border-dark-100/80',
    bg: 'linear-gradient(to bottom, #262626, #1a1a1a)',
    hoverBg: 'linear-gradient(to bottom, #333333, #262626)',
  },
  secondary: {
    base: 'text-dark-200 border border-base-400',
    bg: 'linear-gradient(to bottom, #ffffff, #fafafa)',
    hoverBg: 'linear-gradient(to bottom, #f5f5f5, #eaeaea)',
  },
  accent: {
    base: 'text-white border border-primary/60',
    bg: 'linear-gradient(to bottom, #3b8ee8, #3086e1)',
    hoverBg: 'linear-gradient(to bottom, #4a9bf0, #3b8ee8)',
  },
  ghost: {
    base: 'text-dark-200 border border-base-300',
    bg: 'linear-gradient(to bottom, #f5f5f5, #f0f0f0)',
    hoverBg: 'linear-gradient(to bottom, #eaeaea, #e0e0e0)',
  },
  dark: {
    base: 'text-white border border-white/10',
    bg: 'linear-gradient(to bottom, #333333, #262626)',
    hoverBg: 'linear-gradient(to bottom, #404040, #333333)',
  },
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  href,
  icon = true,
  className = '',
  onClick,
  type = 'button',
}) => {
  const style = variantStyles[variant];

  const sharedClasses = `inline-flex whitespace-nowrap items-center justify-center gap-1.5 rounded-lg px-5 py-3 text-sm font-medium cursor-pointer select-none ${style.base} ${className}`;

  const motionProps = {
    className: sharedClasses,
    style: { background: style.bg },
    whileHover: {
      background: style.hoverBg,
      y: -1,
      transition: { duration: 0.2, ease: 'easeOut' },
    },
    whileTap: { scale: 0.97, y: 0, transition: { duration: 0.1 } },
    transition: { duration: 0.2, ease: 'easeOut' },
  } as const;

  const content = (
    <>
      {children}
      {icon && (
        <motion.span
          className="inline-flex"
          initial={false}
        >
          <IoChevronForwardOutline className="w-4 h-4" />
        </motion.span>
      )}
    </>
  );

  if (href) {
    return (
      <motion.div {...motionProps}>
        <Link href={href} className="inline-flex items-center justify-center gap-1.5 w-full h-full">
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button onClick={onClick} type={type} {...motionProps}>
      {content}
    </motion.button>
  );
};

export default Button;
