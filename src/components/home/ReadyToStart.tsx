'use client';
import React from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/ui/Button';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const ReadyToStart: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center justify-center px-5 md:px-10 py-20 md:py-24">
      <motion.div
        className="relative w-full max-w-370 mx-auto bg-neutral-950 rounded-3xl overflow-hidden flex flex-col items-center justify-center py-24 md:py-32"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >

        <div className="absolute inset-0 pointer-events-none">

          <div className="absolute top-0 left-0 right-0 w-full z-0">
            <Image
              src="/assets/home/ready-to-start-top.svg"
              alt=""
              width={1200}
              height={400}
              className="w-full h-auto"
              priority={false}
            />
          </div>

          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-40 md:w-77.5 z-0">
            <Image
              src="/assets/home/cta-left-abstract.png"
              alt=""
              width={310}
              height={485}
              className="w-auto h-full object-cover object-left"
              priority={false}
            />
          </div>

          <div className="hidden md:block absolute right-0 top-0 bottom-0 w-40 md:w-77.5 z-0">
            <Image
              src="/assets/home/cta-right-abstract.png"
              alt=""
              width={310}
              height={485}
              className="w-auto h-full object-cover object-right"
              priority={false}
            />
          </div>
        </div>

        <div className="absolute top-0 left-0 w-full z-0 pointer-events-none">
          <Image
            src="/assets/home/cta-top-patch.png"
            alt=""
            width={1481}
            height={1382}
            className="w-full h-auto object-cover object-top"
            priority={false}
          />
        </div>

        <div className="absolute bottom-0 left-0 w-full z-0 pointer-events-none">
          <Image
            src="/assets/home/cta-bottom-patch.png"
            alt=""
            width={1484}
            height={112}
            className="w-full h-auto object-cover object-bottom"
            priority={false}
          />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-10 px-6 text-center w-11/12 md:w-4/5 max-w-100 mt-8">
          <div className="flex flex-col items-center gap-6">
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-semibold tracking-tight text-white"
            >
              Ready to build?
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-base text-neutral-300"
            >
              Tell us about the system you need. We&apos;ll respond within 24 hours with an honest assessment of how we&apos;d approach it.
            </motion.p>
          </div>

          <motion.div variants={itemVariants} className="flex items-center gap-3">
            <Button href="/contact" variant="accent">
              Start a Project
            </Button>
            <Button href="/#services" variant="dark" icon={false}>
              Explore Services
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ReadyToStart;