'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { IoAddOutline } from 'react-icons/io5';
import { BsQuestionCircle } from 'react-icons/bs';
import SectionBadge from '@/components/ui/SectionBadge';
import Button from '@/components/ui/Button';

const faqsLeft = [
  {
    question: 'What is ElixoLabs?',
    answer:
      'ElixoLabs is an AI-native product engineering firm. We design and build intelligent systems, AI agents, operational platforms, and automation systems for startups and small businesses worldwide.',
  },
  {
    question: 'What types of projects do you work on?',
    answer:
      'We build AI agent systems, operational platforms, intelligent workflow automation, full product engineering (V1 builds), and provide architecture and technical strategy services. We focus on systems where intelligence is embedded from day one.',
  },
  {
    question: 'How does your pricing work?',
    answer:
      'We scope projects and price them based on the work involved. No hourly rates, no surprise bills. You\'ll know the full investment before we start. The discovery conversation and initial architecture review are free.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'Project timelines vary based on scope. Agent engineering typically takes 4-8 weeks. Operational platforms take 6-12 weeks. Product engineering (V1 builds) takes 8-16 weeks. Architecture reviews take 1-3 weeks.',
  },
  {
    question: 'Do you work with international clients?',
    answer:
      'Yes. We work with clients globally. We\'re remotely based and operate as a global engineering practice with professional communication and transparent processes.',
  },
];

const faqsRight = [
  {
    question: 'What makes ElixoLabs different from other agencies?',
    answer:
      'We treat intelligence as architecture, not a feature to bolt on at the end. Every project is architect-led - the person who designs your system is the person who builds it. No handoffs, no junior developers taking over.',
  },
  {
    question: 'What does \'AI-native\' mean?',
    answer:
      'AI-native means intelligence is embedded in the system architecture from day one. We don\'t add AI as an afterthought - we design systems where AI agents, automation, and intelligent behavior are foundational.',
  },
  {
    question: 'What technologies do you use?',
    answer:
      'We\'re technology-agnostic and choose the right tools for each project. Common technologies include Python, TypeScript, Next.js, PostgreSQL, and various AI/ML APIs. We build with modern infrastructure designed to scale.',
  },
  {
    question: 'What happens after a project is complete?',
    answer:
      'Every system ships with full documentation, architecture diagrams, and technical runbooks. We offer optional ongoing support arrangements after the initial build engagement.',
  },
  {
    question: 'How do I get started?',
    answer:
      'Contact us through the website or email hello@elixolabs.com. We\'ll schedule a conversation to understand your needs and determine if we\'re the right fit. No pressure, no pitch decks - just a straightforward discussion.',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const FAQItem: React.FC<{
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}> = ({ question, answer, isOpen, onToggle }) => {
  return (
    <motion.div variants={itemVariants} className="w-full">
      <motion.div
        layout
        transition={{ layout: { duration: 0.3, ease: 'easeInOut' } }}
        className={`w-full overflow-hidden ${
          isOpen ? 'bg-white shadow-sm' : 'bg-base-300'
        } rounded-xl`}
      >
        <button
          onClick={onToggle}
          className="w-full flex items-center gap-2.5 cursor-pointer pl-6 pr-3 py-4"
        >
          <span className="flex-1 text-left text-base font-semibold text-dark-200">
            {question}
          </span>
          <div className="bg-dark-200 rounded-full w-10 h-10 flex items-center justify-center shrink-0">
            <motion.div
              animate={{ rotate: isOpen ? 45 : 0 }}
              transition={{ duration: 0.3, ease: 'circOut' }}
            >
              <IoAddOutline className="w-4.5 h-4.5 text-base-100" />
            </motion.div>
          </div>
        </button>

        <AnimatePresence initial={false} mode="sync">
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="w-full h-px bg-base-400 opacity-50" />
              <div className="px-6 pb-6 pt-5">
                <p className="text-sm text-dark-100 max-w-md leading-relaxed">{answer}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

const FAQ: React.FC = () => {
  const [openLeft, setOpenLeft] = useState<number>(0);
  const [openRight, setOpenRight] = useState<number>(0);

  return (
    <section id="faq" className="relative flex flex-col items-center justify-center px-5 md:px-10 py-16 md:py-24 overflow-hidden w-full">
      <motion.div
        className="flex flex-col items-start gap-0 max-w-sm md:max-w-7xl w-full relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between w-full p-8 md:p-12 gap-6">
          <div className="flex flex-col gap-4">
            <motion.div variants={itemVariants}>
              <SectionBadge icon={BsQuestionCircle} label="FAQ's" />
            </motion.div>

            <div className="flex flex-col gap-3">
              <motion.h2
                variants={itemVariants}
                className="text-4xl md:text-5xl tracking-tight text-dark-200 font-semibold"
              >
                Frequently Asked Questions
              </motion.h2>
              <motion.p variants={itemVariants} className="text-base text-base-900 max-w-lg">
                Find answers to common questions about ElixoLabs, our services, and how we work with clients.
              </motion.p>
            </div>
          </div>

          <motion.div variants={itemVariants}>
            <Button href="/contact" variant="secondary" icon={false}>
              Contact Us
            </Button>
          </motion.div>
        </div>

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
          <div className="absolute left-0 -bottom-16 md:-bottom-28 w-px h-16 md:h-28 bg-linear-to-b from-base-400 to-transparent" />
          <div className="absolute right-0 -bottom-16 md:-bottom-28 w-px h-16 md:h-28 bg-linear-to-b from-base-400 to-transparent" />

          <div className="flex flex-col md:flex-row">
            <div className="relative flex-1 flex flex-col gap-5 p-5 md:p-8">
              <div className="hidden md:block absolute top-0 bottom-0 right-0 w-px bg-base-400" />
              {faqsLeft.map((faq, index) => (
                <FAQItem
                  key={`left-${index}`}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openLeft === index}
                  onToggle={() => setOpenLeft(openLeft === index ? -1 : index)}
                />
              ))}
            </div>

            <div className="flex-1 flex flex-col gap-5 p-5 md:p-8 border-t md:border-t-0 border-base-400">
              {faqsRight.map((faq, index) => (
                <FAQItem
                  key={`right-${index}`}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openRight === index}
                  onToggle={() => setOpenRight(openRight === index ? -1 : index)}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FAQ;
