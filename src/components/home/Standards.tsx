'use client';
import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { BsStars, BsClock, BsGraphUpArrow } from 'react-icons/bs';
import { TbTargetArrow } from 'react-icons/tb';
import SectionBadge from '@/components/ui/SectionBadge';
import IconBox from '@/components/ui/IconBox';

const featureCards = [
  { icon: TbTargetArrow, title: 'Tested Code' },
  { icon: BsClock, title: 'Documented Architecture' },
  { icon: BsGraphUpArrow, title: 'Production-Grade Deployment' },
];

const stats = [
  { value: '100%', label: 'Test coverage' },
  { value: '24h', label: 'Response time' },
  { value: 'Full', label: 'Documentation' },
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

const Standards: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center justify-center px-5 md:px-10 pb-16 md:pb-24 overflow-hidden w-full">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 max-w-sm md:max-w-7xl w-full z-10">
        <motion.div

          className="relative w-full max-w-xl lg:max-w-none lg:w-135 rounded-2xl overflow-hidden shrink-0 border-[6px] border-white shadow-lg"
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        >
          <Image
            src="/assets2/home/predictive-main.png"
            alt="Engineering Standards"

            width={540}
            height={400}
            className="w-full h-auto object-contain"
            priority
          />
        </motion.div>
        <motion.div
          className="flex flex-1 flex-col gap-10 items-start min-w-0 w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <div className="flex flex-col gap-4 items-start w-full">
            <motion.div variants={itemVariants}>
              <SectionBadge icon={BsStars} label="Engineering Standards" />
            </motion.div>

            <div className="flex flex-col gap-3 items-start w-full">
              <motion.div variants={itemVariants} className="w-full">
                <h2 className="text-4xl md:text-5xl leading-tight tracking-tight font-semibold text-dark-200">
                  What ships with
                  <br className="hidden md:block" /> every project
                </h2>
              </motion.div>

              <motion.div variants={itemVariants} className="w-full">
                <p className="text-base text-base-900 max-w-lg">
                  We don&apos;t cut corners. Every system ElixoLabs delivers meets these standards - regardless of project size. Tested code, documented architecture, and production-grade deployment.
                </p>
              </motion.div>
            </div>
          </div>

          <div className="flex flex-col gap-10 items-start w-full">
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-2.5 items-stretch w-full"
            >
              {featureCards.map((card) => (
                <div
                  key={card.title}
                  className="flex-1 flex flex-col gap-2 items-start justify-center p-4 bg-white rounded-xl shadow-sm transition-shadow duration-300 hover:shadow-md"
                >
                  <IconBox icon={card.icon} />
                  <p className="text-sm font-medium text-base-900 max-w-36">{card.title}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-start w-full border-t border-base-300 relative mt-2"
            >
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex flex-col gap-2 md:gap-3.5 items-start py-5 md:py-6 flex-1 relative ${i === 0 ? 'pr-3 md:pr-6' : i === 1 ? 'px-3 md:px-6' : 'pl-3 md:pl-6'
                    }`}
                >
                  <span className="text-2xl lg:text-3xl leading-tight font-semibold text-dark-200">
                    {stat.value}
                  </span>
                  <p className="text-sm lg:text-base font-medium text-base-900">{stat.label}</p>
                  {i < 2 && (
                    <>
                      <div className="absolute right-0 top-0 bottom-0 w-px bg-base-300" />
                      <div className="absolute -right-1 -top-1 w-2 h-2 bg-white rounded-xs shadow-dot z-10" />
                      <div className="absolute -right-1 -bottom-1 w-2 h-2 bg-white rounded-xs shadow-dot z-10" />
                    </>
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Standards;