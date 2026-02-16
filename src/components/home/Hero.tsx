'use client';
import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import Button from '@/components/ui/Button';
import IconBox from '@/components/ui/IconBox';
import { BsCodeSlash, BsGear, BsRobot } from 'react-icons/bs';

const heroFeatures = [
  {
    icon: BsRobot,
    title: 'AI Agent Systems',
    description: ['Purpose-built agents for real', 'business operations.'],
  },
  {
    icon: BsGear,
    title: 'Operational Platforms',
    description: ['Custom internal tools that replace', 'spreadsheet chaos.'],
  },
  {
    icon: BsCodeSlash,
    title: 'Product Engineering',
    description: ['Architecture-first builds designed', 'to scale with you.'],
  },
];

const titleContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.25, staggerChildren: 0.12 },
  },
};

const blurWordVariants: Variants = {
  hidden: { opacity: 0, filter: 'blur(8px)', y: 20 },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

const CornerBox = ({
  position,
  lines,
}: {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  lines: ('left' | 'right' | 'bottom')[];
}) => {
  const posClasses = {
    'top-left': '-top-1.25 -left-1.25',
    'top-right': '-top-1.25 -right-1.25',
    'bottom-left': '-bottom-1.25 -left-1.25',
    'bottom-right': '-bottom-1.25 -right-1.25',
  }[position];

  return (
    <div className={`absolute w-2.5 h-2.5 bg-white rounded-xs shadow-dot z-30 ${posClasses}`}>
      {lines.includes('left') && (
        <div className="absolute top-[4.5px] right-2.25 w-12.5 h-px bg-linear-to-l from-base-400 to-transparent" />
      )}
      {lines.includes('right') && (
        <div className="absolute top-[4.5px] left-2.25 w-12.5 h-px bg-linear-to-r from-base-400 to-transparent" />
      )}
      {lines.includes('bottom') && (
        <div className="absolute left-[4.5px] top-2.25 w-px h-12.5 bg-linear-to-b from-base-400 to-transparent" />
      )}
    </div>
  );
};

const Hero: React.FC = () => {
  const titleLine1 = 'We Build Intelligent Systems'.split(' ');
  const titleLine2 = 'That Run Your Business'.split(' ');

  return (
    <section className="relative flex flex-col items-center justify-center pt-24 md:pt-32 lg:pt-40 pb-24 lg:pb-36 px-5 md:px-10 overflow-hidden">
      <motion.figure
        className="absolute top-0 left-0 right-0 z-1 overflow-visible pointer-events-none"
        style={{ aspectRatio: '0.840173' }}
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <Image
          src="/assets/home/hero-rays.png"
          alt=""
          width={1520}
          height={1471}
          className="w-full h-auto"
          priority
        />
      </motion.figure>

      <div className="relative flex flex-col items-center gap-16 max-w-sm md:max-w-7xl w-full">
        <div className="flex flex-col items-center gap-5 max-w-4xl w-full">

          <div className="flex flex-col items-center gap-10 w-full z-10">
            <div className="flex flex-col items-center gap-4 w-full">
              <motion.h1
                variants={titleContainerVariants}
                initial="hidden"
                animate="visible"
                className="text-4xl md:text-5xl lg:text-5xl leading-tight tracking-tight font-semibold text-dark-200 text-center"
              >
                {titleLine1.map((word, i) => (
                  <React.Fragment key={`w1-${i}`}>
                    <motion.span variants={blurWordVariants} className="inline-block">
                      {word}
                    </motion.span>
                    {i < titleLine1.length - 1 && ' '}
                  </React.Fragment>
                ))}
                <br />
                {titleLine2.map((word, i) => (
                  <React.Fragment key={`w2-${i}`}>
                    <motion.span variants={blurWordVariants} className="inline-block">
                      {word}
                    </motion.span>
                    {i < titleLine2.length - 1 && ' '}
                  </React.Fragment>
                ))}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-col items-center w-full px-4"
              >
                <p className="text-base text-base-900 text-center max-w-2xl">
                  ElixoLabs is an AI-native product engineering firm. We design and build AI agents, 
                  operational platforms, and automation systems - architected for production, not demonstration.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="relative flex flex-wrap justify-center items-center gap-3"
            >
              <Button href="/contact" variant="primary">
                Start a Project
              </Button>
              <Button href="/#services" variant="secondary" icon={false}>
                Explore Services
              </Button>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="relative w-full border border-base-400 z-10 bg-white/40 backdrop-blur-sm grid grid-cols-1 md:grid-cols-3"
        >
          <CornerBox position="top-left" lines={['left']} />
          <CornerBox position="top-right" lines={['right']} />
          <CornerBox position="bottom-left" lines={['left', 'bottom']} />
          <CornerBox position="bottom-right" lines={['right', 'bottom']} />

          {heroFeatures.map((feature, i) => (
            <div
              key={feature.title}
              className={`relative flex flex-col gap-4 p-6 lg:p-7.5 border-b md:border-b-0 border-base-400 ${
                i < 2 ? 'md:border-r' : ''
              }`}
            >
              {i === 0 && (
                <>
                  <div className="hidden md:block absolute -top-1.25 -right-1.25 w-2.5 h-2.5 bg-white rounded-xs shadow-dot z-20" />
                  <div className="hidden md:block absolute -bottom-1.25 -left-1.25 w-2.5 h-2.5 bg-white rounded-xs shadow-dot z-20" />
                  <div className="hidden md:block absolute -bottom-1.25 -right-1.25 w-2.5 h-2.5 bg-white rounded-xs shadow-dot z-20" />
                </>
              )}
              {i === 1 && (
                <>
                  <div className="hidden md:block absolute -top-1.25 -right-1.25 w-2.5 h-2.5 bg-white rounded-xs shadow-dot z-20" />
                  <div className="hidden md:block absolute -bottom-1.25 -right-1.25 w-2.5 h-2.5 bg-white rounded-xs shadow-dot z-20" />
                </>
              )}
              {i === 2 && (
                <div className="hidden md:block absolute -bottom-1.25 -right-1.25 w-2.5 h-2.5 bg-white rounded-xs shadow-dot z-20" />
              )}

              <IconBox icon={feature.icon} size="md" />

              <div className="flex flex-col gap-1">
                <span className="text-base font-semibold text-dark-200">{feature.title}</span>
                <div className="flex flex-col">
                  {feature.description.map((line, j) => (
                    <span key={j} className="text-sm text-base-900">
                      {line}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
