'use client';
import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import {
  BsLightningCharge,
  BsGrid3X3Gap,
  BsStars,
  BsClock,
  BsBellFill,
} from 'react-icons/bs';
import { TbTargetArrow } from 'react-icons/tb';
import Button from '@/components/ui/Button';
import SectionBadge from '@/components/ui/SectionBadge';
import IconBox from '@/components/ui/IconBox';

const bulletItems = [
  { icon: BsLightningCharge, label: 'Intelligent decision-making' },
  { icon: BsGrid3X3Gap, label: 'Embedded AI capabilities' },
  { icon: BsStars, label: 'Production-grade systems' },
  { icon: BsClock, label: 'Architecture-first approach' },
  { icon: BsBellFill, label: 'Scalable from day one' },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const WhyItMatters: React.FC = () => {
  return (
    <section id="about" className="relative flex flex-col items-center justify-center px-5 md:px-10 pb-16 md:pb-24 overflow-hidden w-full">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16 max-w-sm md:max-w-7xl w-full z-10">
        <motion.div
          className="flex flex-1 flex-col gap-8 md:gap-10 items-start min-w-0 w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <div className="flex flex-col gap-5 items-start w-full">
            <motion.div variants={itemVariants}>
              <SectionBadge icon={TbTargetArrow} label="Our Philosophy" />
            </motion.div>

            <div className="flex flex-col gap-4 items-start w-full">
              <motion.div variants={itemVariants} className="w-full">
                <h2 className="text-4xl md:text-5xl leading-tight tracking-tight font-semibold text-dark-200">
                  Intelligence is
                  <br className="hidden md:block" />
                  architecture
                </h2>
              </motion.div>

              <motion.div variants={itemVariants} className="w-full">
                <p className="text-base text-base-900 max-w-lg">
                  Most engineering firms treat AI as a feature - something you add at the end. We treat intelligence as architecture. When we design a system, we ask: where should intelligence live? Which decisions should be automated? Where does an AI agent outperform a static workflow?
                </p>
              </motion.div>
            </div>
          </div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 md:gap-y-5 w-full"
          >
            {bulletItems.map((item) => (
              <div key={item.label} className="flex items-center gap-3 group">
                <IconBox icon={item.icon} />
                <span className="text-base md:text-sm font-medium text-dark-200">
                  {item.label}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 mt-2">
            <Button href="/contact" variant="primary">Start a Project</Button>
            <Button href="/#services" variant="secondary" icon={false}>Explore Services</Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative w-full max-w-xl lg:max-w-none lg:w-135 aspect-4/3 rounded-2xl overflow-hidden shrink-0 border-[6px] border-white shadow-lg"
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        >
          <Image
            src="/assets2/home/why-image.png"
            alt="Intelligence Is Architecture"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 540px"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default WhyItMatters;
