'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { BsStars, BsLightningCharge, BsShieldCheck } from 'react-icons/bs';
import { TbTargetArrow } from 'react-icons/tb';
import Button from '@/components/ui/Button';
import SectionBadge from '@/components/ui/SectionBadge';
import IconBox from '@/components/ui/IconBox';

const tabs = [
  { label: 'Discovery', id: 'discovery' },
  { label: 'Architecture', id: 'architecture' },
  { label: 'Build', id: 'build' },
  { label: 'Deploy', id: 'deploy' },
];

const tabContent: Record<
  string,
  {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
    image: string;
    stat1: { value: string; label: string };
    stat2: { value: string; label: string };
  }
> = {
  'discovery': {
    icon: BsStars,
    title: '01 - Discovery',
    description: 'We start with a conversation. You describe the problem. We ask questions. Together, we determine if ElixoLabs is the right fit for what you need. No forms to fill out. No discovery phase invoices. Just a conversation.',

    image: '/assets2/home/features-smart-replies.png',
    stat1: { value: 'Free', label: 'Initial consultation' },
    stat2: { value: '24h', label: 'Response time' },
  },
  'architecture': {
    icon: BsLightningCharge,
    title: '02 - Architecture',
    description: 'We design the system before we write the first line of code. You receive a proposal with an architecture overview, milestone breakdown, timeline, and investment. You know exactly what you\'re getting before anything is built.',

    image: '/assets2/home/features-auto-followups.png',
    stat1: { value: 'Clear', label: 'Scope defined upfront' },
    stat2: { value: 'Full', label: 'Technical documentation' },
  },
  'build': {
    icon: BsStars,
    title: '03 - Build',
    description: 'We build in milestones. Each milestone produces working, deployable software - not wireframes or mockups. You see real progress every week. You can give feedback on working systems, not static documents.',

    image: '/assets2/home/features-conversation-insights.png',
    stat1: { value: 'Weekly', label: 'Progress updates' },
    stat2: { value: '100%', label: 'Working software' },
  },
  'deploy': {
    icon: BsShieldCheck,
    title: '04 - Deploy',
    description: 'We deploy to production. We test in production. We document everything. When we hand over the system, it\'s running, monitored, and ready.',

    image: '/assets2/home/features-priority-sorting.png',
    stat1: { value: 'Full', label: 'Production deployment' },
    stat2: { value: 'Complete', label: 'Handoff documentation' },
  },
};

const bottomCards = [
  {
    icon: BsLightningCharge,
    title: 'Transparent Pricing',
    description: 'Full scope and investment upfront.',
  },
  {
    icon: BsShieldCheck,
    title: 'Weekly Updates',
    description: 'Clear communication throughout.',
  },
  {
    icon: TbTargetArrow,
    title: 'Production-Ready',
    description: 'Systems that work from day one.',
  },
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

const OurProcess: React.FC = () => {
  const [activeTab, setActiveTab] = useState('discovery');
  const content = tabContent[activeTab];

  return (
    <section id="process" className="relative flex flex-col items-center justify-center px-5 md:px-10 py-16 md:py-24 overflow-hidden w-full">
      <div className="absolute bottom-20 -left-2.5 w-64 h-[718px] pointer-events-none hidden xl:block z-0">
        <Image src="/assets2/home/features-abstract-left.png" alt="" fill className="object-contain" />
      </div>
      <div className="absolute bottom-20 -right-2.5 w-64 h-[718px] pointer-events-none hidden xl:block z-0">
        <Image src="/assets2/home/features-abstract-right.png" alt="" fill className="object-contain" />
      </div>

      <motion.div
        className="flex flex-col items-center gap-16 max-w-sm md:max-w-7xl w-full relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        <div className="flex flex-col items-center gap-4 w-full">
          <motion.div variants={itemVariants}>
            <SectionBadge icon={BsStars} label="Our Process" />
          </motion.div>

          <div className="flex flex-col items-center gap-4 w-full">
            <motion.div variants={itemVariants} className="relative flex flex-col items-center w-full">
              <h2 className="text-4xl md:text-5xl leading-tight tracking-tight font-semibold text-dark-200 text-center">
                From conversation
              </h2>
              <h2 className="text-4xl md:text-5xl leading-tight tracking-tight font-semibold text-dark-200 text-center">
                to production
              </h2>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-base text-base-900 text-center max-w-lg"
            >
              A structured, transparent process designed to turn your idea into a production system.
            </motion.p>
          </div>
        </div>

        <motion.div variants={itemVariants} className="flex flex-col items-center gap-5 w-full">
          <div className="w-full flex items-center justify-start md:justify-center overflow-x-auto pb-2 -mb-2 no-scrollbar">
            <div className="bg-base-300 rounded-full p-1 flex items-center shrink-0">
              {tabs.map((tab, i) => (
                <React.Fragment key={tab.id}>
                  <button
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative px-4 py-2.5 md:py-3 rounded-full text-sm font-medium whitespace-nowrap transition-all cursor-pointer ${
                      activeTab === tab.id
                        ? 'bg-white text-dark-200 shadow-sm'
                        : 'text-base-900 hover:text-dark-200'
                    }`}
                  >
                    {tab.label}
                  </button>
                  {i < tabs.length - 1 &&
                    activeTab !== tab.id &&
                    activeTab !== tabs[i + 1]?.id && (
                      <div className="w-px h-5 md:h-6 bg-base-400 shrink-0 mx-0.5" />
                    )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="relative w-full border border-base-400 flex flex-col">
            <div className="absolute -top-1.25 -left-1.25 w-2.5 h-2.5 bg-white rounded-xs shadow-dot z-20" />
            <div className="absolute -top-1.25 -right-1.25 w-2.5 h-2.5 bg-white rounded-xs shadow-dot z-20" />
            <div className="absolute -bottom-1.25 -left-1.25 w-2.5 h-2.5 bg-white rounded-xs shadow-dot z-20" />
            <div className="absolute -bottom-1.25 -right-1.25 w-2.5 h-2.5 bg-white rounded-xs shadow-dot z-20" />

            <div className="absolute -left-12 md:-left-20 top-0 w-12 md:w-20 h-px bg-linear-to-l from-base-400 to-transparent" />
            <div className="absolute -right-12 md:-right-20 top-0 w-12 md:w-20 h-px bg-linear-to-r from-base-400 to-transparent" />
            <div className="absolute -left-12 md:-left-20 bottom-0 w-12 md:w-20 h-px bg-linear-to-l from-base-400 to-transparent" />
            <div className="absolute -right-12 md:-right-20 bottom-0 w-12 md:w-20 h-px bg-linear-to-r from-base-400 to-transparent" />

            <div className="absolute left-0 -bottom-16 md:-bottom-28 w-px h-16 md:h-28 bg-linear-to-b from-base-400 to-transparent" />
            <div className="absolute right-0 -bottom-16 md:-bottom-28 w-px h-16 md:h-28 bg-linear-to-b from-base-400 to-transparent" />

            <div className="relative p-4 md:p-5 border-b border-base-400">
              <div className="absolute -bottom-1.25 -left-1.25 w-2.5 h-2.5 bg-white rounded-xs shadow-dot z-20" />
              <div className="absolute -bottom-1.25 -right-1.25 w-2.5 h-2.5 bg-white rounded-xs shadow-dot z-20" />

              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col lg:flex-row"
                  >
                    <div className="flex flex-col flex-1 min-w-0">
                      <div className="flex flex-1 flex-col gap-6 md:gap-8 items-start justify-center pt-6 md:pt-8 px-5 md:px-8 pb-5">
                        <div className="flex flex-col gap-3 items-start max-w-xs">
                          <IconBox icon={content.icon} />
                          <div className="flex flex-col gap-0.5">
                            <h3 className="text-2xl md:text-3xl font-semibold text-dark-200">
                              {content.title}
                            </h3>
                            <p className="text-sm md:text-base text-base-900">
                              {content.description}
                            </p>
                          </div>
                        </div>

                        <Button href="/contact" variant="ghost">Start a Project</Button>
                      </div>

                      <div className="shrink-0 grid grid-cols-2 divide-x divide-base-400 border-t border-base-400">
                        <div className="flex flex-col gap-1.5 items-start py-4 px-5 md:pt-8 md:pb-6 md:px-8">
                          <span className="text-xl md:text-3xl font-semibold text-dark-200">
                            {content.stat1.value}
                          </span>
                          <span className="text-sm font-medium text-base-900">
                            {content.stat1.label}
                          </span>
                        </div>
                        <div className="flex flex-col gap-1.5 items-start py-4 px-5 md:pt-8 md:pb-6 md:px-8">
                          <span className="text-xl md:text-3xl font-semibold text-dark-200">
                            {content.stat2.value}
                          </span>
                          <span className="text-sm font-medium text-base-900">
                            {content.stat2.label}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="relative w-full lg:w-96 h-72 sm:h-88 lg:h-auto lg:min-h-[416px] p-2.5 shrink-0 bg-white border-t lg:border-t-0 lg:border-l border-base-400">
                      <div className="relative w-full h-full rounded-xl overflow-hidden border border-base-200/50 bg-base-50">
                        <Image src={content.image} alt={content.title} fill className="object-cover" />
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-base-400 bg-base-50/50">
              {bottomCards.map((card) => (
                <div key={card.title} className="flex gap-2.5 items-start p-5 md:p-8">
                  <IconBox icon={card.icon} />
                  <div className="flex flex-col flex-1 min-w-0">
                    <span className="text-base font-semibold text-dark-200">{card.title}</span>
                    <p className="text-sm font-medium text-base-900">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default OurProcess;