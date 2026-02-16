'use client';
import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { IoChevronForwardOutline } from 'react-icons/io5';
import { BsStars, BsShieldCheck, BsGraphUpArrow } from 'react-icons/bs';
import Button from '@/components/ui/Button';
import SectionBadge from '@/components/ui/SectionBadge';
import Link from 'next/link';

const featureCards = [
  {
    image: '/assets/home/feature-img-1.png',
    title: 'AI Agent Systems',
    description: 'Purpose-built agents that handle real business operations autonomously.',
  },
  {
    image: '/assets/home/feature-card-2.png',
    title: 'Operational Platforms',
    description: 'Custom internal tools that replace spreadsheet chaos with proper systems.',
  },
  {
    image: '/assets/home/feature-img-3.png',
    title: 'Intelligent Automation',
    description: 'Workflows that reason, decide, and act - beyond simple triggers.',
  },
];

const featureCardsRow2 = [
  {
    image: '/assets/home/feature-img-4.png',
    title: 'Product Engineering',
    description: 'Full product builds with architecture-first approach, designed to scale.',
  },
  {
    image: '/assets/home/feature-img-5.png',
    title: 'Technical Strategy',
    description: 'System design and architectural planning before you build.',
  },
];

const bottomFeatures = [
  { icon: BsGraphUpArrow, label: 'Architecture-first' },
  { icon: BsStars, label: 'Production-grade' },
  { icon: BsShieldCheck, label: 'Tested & documented' },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' },
  }),
};

const CornerDot = ({ className }: { className: string }) => (
  <div className={`absolute w-2 h-2 bg-white rounded-[1px] shadow-dot z-50 pointer-events-none ${className}`} />
);

const Features: React.FC = () => {
  return (
    <section id="services" className="relative flex flex-col items-center justify-center px-5 md:px-10 pb-16 md:pb-24 overflow-hidden">
      <div className="flex flex-col items-center gap-12 max-w-sm md:max-w-7xl w-full">
        <div className="flex flex-col gap-px w-full">
          <div className="relative flex flex-col lg:flex-row items-start lg:items-end justify-between px-6 lg:px-20 py-8 lg:py-12 gap-8 lg:gap-0 z-2">
            <div className="flex flex-col gap-4 flex-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <SectionBadge icon={BsStars} label="Capabilities" />
              </motion.div>

              <div className="relative flex flex-col gap-3">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <h2 className="text-4xl md:text-5xl leading-tight font-semibold text-dark-200">
                    Intelligence embedded
                  </h2>
                  <h2 className="text-4xl md:text-5xl leading-tight font-semibold text-dark-200">
                    from <span className="text-primary">day one</span>
                  </h2>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <p className="text-base text-base-900 max-w-md">
                    Every system we build starts with architecture. Intelligence is embedded from day one - not added as an afterthought.
                  </p>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 w-full lg:w-auto"
            >
              <Button href="/contact" variant="primary">Start a Project</Button>
              <Button href="/#process" variant="secondary" icon={false}>See Our Process</Button>
            </motion.div>
          </div>

          <div className="relative flex flex-col w-full z-1">

            <div className="absolute inset-x-0 top-0 h-px bg-base-400 z-20 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-base-400 z-20 pointer-events-none" />
            <div className="absolute inset-y-0 left-0 w-px bg-base-400 z-20 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-px bg-base-400 z-20 pointer-events-none" />

            <div className="absolute left-0 -top-28 w-px h-28 bg-linear-to-t from-base-400 to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 -top-28 w-px h-28 bg-linear-to-t from-base-400 to-transparent z-20 pointer-events-none" />
            <div className="absolute left-0 -bottom-28 w-px h-28 bg-linear-to-b from-base-400 to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 -bottom-28 w-px h-28 bg-linear-to-b from-base-400 to-transparent z-20 pointer-events-none" />
            <div className="absolute -left-20 top-0 w-20 h-px bg-linear-to-l from-base-400 to-transparent z-20 pointer-events-none" />
            <div className="absolute -right-20 top-0 w-20 h-px bg-linear-to-r from-base-400 to-transparent z-20 pointer-events-none" />
            <div className="absolute -left-20 bottom-0 w-20 h-px bg-linear-to-l from-base-400 to-transparent z-20 pointer-events-none" />
            <div className="absolute -right-20 bottom-0 w-20 h-px bg-linear-to-r from-base-400 to-transparent z-20 pointer-events-none" />

            <CornerDot className="-top-1 -left-1" />
            <CornerDot className="-top-1 -right-1" />
            <CornerDot className="-bottom-1 -left-1" />
            <CornerDot className="-bottom-1 -right-1" />

            <div className="relative flex flex-col md:flex-row w-full z-10">
              {featureCards.map((card, i) => (
                <div
                  key={card.title}
                  className={`relative flex-1 group ${
                    i === 0 ? 'border-b border-base-400 md:border-r' :
                    i === 1 ? 'border-b border-base-400 md:border-r' :
                    'border-b border-base-400'
                  }`}
                >

                  {i === 0 && (
                    <>
                      <CornerDot className="hidden md:block -top-1 -right-1" />
                      <CornerDot className="hidden md:block -bottom-1 -right-1" />
                      <CornerDot className="-bottom-1 -left-1" /> 
                      <CornerDot className="block md:hidden -bottom-1 -right-1" />
                    </>
                  )}
                  {i === 1 && (
                    <>
                      <CornerDot className="hidden md:block -top-1 -right-1" />
                      <CornerDot className="hidden md:block -bottom-1 -right-1" />
                      <CornerDot className="block md:hidden -bottom-1 -left-1" />
                      <CornerDot className="block md:hidden -bottom-1 -right-1" />
                    </>
                  )}
                  {i === 2 && (
                    <>
                      <CornerDot className="hidden md:block -bottom-1 -right-1" />
                      <CornerDot className="block md:hidden -bottom-1 -left-1" />
                      <CornerDot className="block md:hidden -bottom-1 -right-1" />
                    </>
                  )}

                  <motion.div
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={cardVariants}
                    className="flex flex-col h-full bg-white group-hover:bg-base-50 transition-colors duration-300"
                  >

                    <div className="relative aspect-4/3 lg:aspect-355/277 bg-base-100/50">
                      <div className="relative w-full h-full">
                        <Image src={card.image} alt={card.title} fill className="object-cover object-center" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2.5 px-6 pb-8 pt-6">
                      <div className="flex flex-col gap-1.5">
                        <span className="text-lg font-semibold text-dark-200">{card.title}</span>
                        <span className="text-sm text-base-900 leading-relaxed">{card.description}</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>

            <div className="relative flex flex-col md:flex-row w-full z-10">
              {featureCardsRow2.map((card, i) => (
                <div
                  key={card.title}
                  className={`relative flex-1 group ${
                    i === 0 ? 'border-b md:border-b-0 border-base-400 md:border-r' : ''
                  }`}
                >

                  {i === 0 && (
                    <>
                      <CornerDot className="hidden md:block -top-1 -right-1" />
                      <CornerDot className="hidden md:block -bottom-1 -right-1" />
                      <CornerDot className="block md:hidden -bottom-1 -left-1" />
                      <CornerDot className="block md:hidden -bottom-1 -right-1" />
                    </>
                  )}

                  <motion.div
                    custom={i + 3}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={cardVariants}
                    className="flex flex-col h-full bg-white group-hover:bg-base-50 transition-colors duration-300"
                  >
                    <div className="relative aspect-4/3 lg:aspect-543/277 bg-base-100/50">
                      <div className="relative w-full h-full">
                        <Image src={card.image} alt={card.title} fill className="object-cover object-center" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2.5 px-6 pb-8 pt-6">
                      <div className="flex flex-col gap-1.5">
                        <span className="text-lg font-semibold text-dark-200">{card.title}</span>
                        <span className="text-sm text-base-900 leading-relaxed">{card.description}</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 w-full max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex flex-col md:flex-row items-center justify-between w-full rounded-3xl md:rounded-full bg-dark-100 p-5 md:pl-5 md:pr-2.5 md:py-5 shadow-lg overflow-hidden gap-4 md:gap-0"
          >
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5">
              <span className="text-base text-white text-center">
                From architecture to deployment in
              </span>
              <span className="relative text-base font-medium text-white text-center">
                weeks, not months
                <div className="absolute -bottom-5 md:-bottom-6 -left-4 md:-left-8 w-24 md:w-32 h-8 md:h-10 pointer-events-none">
                  <Image src="/assets/home/features-underline.png" alt="" fill className="object-contain" />
                </div>
              </span>
            </div>
            <div className="flex items-center gap-1 rounded-full overflow-hidden px-3 md:px-4 py-1.5 cursor-pointer bg-white/10 md:bg-transparent hover:bg-white/20 transition-colors">
              <Link href="/contact" className="flex items-center gap-1">
                <span className="text-sm font-medium md:font-normal text-white">Start a Project</span>
                <IoChevronForwardOutline className="w-4 h-4 text-white" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col md:flex-row font-semibold items-center justify-center gap-4 md:gap-6 w-full"
          >
            {bottomFeatures.map((feature, i) => (
              <React.Fragment key={feature.label}>
                <div className="flex items-center gap-1.5">
                  <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-dark-200" />
                  <span className="text-base text-dark-200 text-center">{feature.label}</span>
                </div>
                {i < bottomFeatures.length - 1 && (
                  <div className="hidden md:block w-px h-6 bg-base-400" />
                )}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;