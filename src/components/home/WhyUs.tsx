'use client';
import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { BsStars } from 'react-icons/bs'; 
import Button from '@/components/ui/Button';
import SectionBadge from '@/components/ui/SectionBadge';

const trustSignals = [
  {
    title: 'Every project is architect-led',
    description: 'The person who designs your architecture is the person who writes the code. No handoffs between sales teams and junior developers.',
  },
  {
    title: 'We scope before we charge',
    description: 'The discovery conversation and initial architecture review are free. You\'ll know the full scope, timeline, and investment before making any commitment.',
  },
  {
    title: 'We over-communicate, not under-deliver',
    description: 'You\'ll hear from us every week with clear, substantive updates - what was built, what\'s next, and whether we\'re on track.',
  },
  {
    title: 'We\'re engineers, not salespeople',
    description: 'No pitch decks. No "growth hacking." No pressure tactics. If your project isn\'t a fit for us, we\'ll say so and recommend someone who can help.',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const WhyUs: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center justify-center px-5 md:px-10 pt-20 md:pt-24 pb-16 md:pb-24 overflow-visible">
      <div className="relative w-full max-w-375">
        <div className="relative rounded-2xl bg-dark-200">
          
          <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 right-0 w-full">
              <Image src="/assets2/home/difference-top.svg" alt="" width={1200} height={400} className="w-full h-auto" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 w-full">
              <Image src="/assets2/home/difference-bottom.svg" alt="" width={1200} height={400} className="w-full h-auto" />
            </div>
          </div>

          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[78%] max-w-300 z-2 pointer-events-none">
            <Image src="/assets2/home/difference-top-notch.png" alt="" width={1160} height={1082} className="w-full h-auto" />
          </div>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[78%] max-w-300 z-2 pointer-events-none">
            <Image src="/assets2/home/difference-bottom-patch.png" alt="" width={1160} height={87} className="w-full h-auto" />
          </div>

          <motion.div
            className="relative z-3 flex flex-col items-center gap-12 md:gap-20 px-5 md:px-10 lg:px-16 pt-16 md:pt-20 pb-16 md:pb-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className="flex flex-col items-center gap-4 max-w-250 w-full">
              <motion.div variants={itemVariants}>
                <SectionBadge icon={BsStars} label="Why ElixoLabs" dark />
              </motion.div>

              <div className="flex flex-col items-center gap-3 w-full">
                <motion.div variants={itemVariants} className="w-full">
                  <h2 className="text-3xl md:text-5xl leading-tight tracking-tight text-white text-center font-semibold">
                    Built for engineers.
                    <br />
                    Trusted by founders.
                  </h2>
                </motion.div>

                <motion.div variants={itemVariants} className="w-full">
                  <p className="text-sm md:text-base text-base-500 text-center max-w-xl mx-auto">
                    We know that choosing an engineering partner is a significant decision. Here&apos;s what you should know about working with us.
                  </p>
                </motion.div>
              </div>
            </div>

            <div className="flex flex-col w-full max-w-5xl border-t border-white/10">
              {trustSignals.map((signal, index) => (
                <motion.div
                  key={signal.title}
                  variants={itemVariants}
                  className="group flex flex-col md:flex-row md:items-start justify-between gap-4 md:gap-12 py-8 md:py-10 border-b border-white/10 hover:bg-white/[0.02] transition-colors duration-300 px-6 md:px-10"
                >
                  <div className="flex items-start gap-5 md:w-5/12 shrink-0">
                    <span className="text-xs font-mono text-base-600 group-hover:text-primary transition-colors mt-1.5">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <h3 className="text-lg md:text-xl font-medium text-white group-hover:text-white/90 transition-colors">
                      {signal.title}
                    </h3>
                  </div>
                  <p className="text-sm md:text-base text-base-500 md:w-7/12 leading-relaxed">
                    {signal.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <Button href="/contact" variant="accent">Start a Project</Button>
              <Button href="/#process" variant="dark" icon={false}>See Our Process</Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;