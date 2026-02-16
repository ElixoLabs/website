'use client';
import React from 'react';
import { motion, Variants } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionBadge from '@/components/ui/SectionBadge';
import { BsFileText } from 'react-icons/bs';

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

const CornerDot = ({ className }: { className: string }) => (
  <div className={`absolute w-2 h-2 bg-white rounded-[1px] shadow-dot z-50 pointer-events-none ${className}`} />
);

const TermsPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <section className="relative flex flex-col items-center justify-center px-5 md:px-10 pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden w-full">
        <motion.div
          className="flex flex-col items-center gap-12 max-w-sm md:max-w-4xl w-full relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-col items-center gap-4 w-full text-center">
            <motion.div variants={itemVariants}>
              <SectionBadge icon={BsFileText} label="Legal" />
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl font-semibold tracking-tight text-dark-200"
            >
              Terms & Conditions
            </motion.h1>
          </div>

          <motion.div 
            variants={itemVariants}
            className="relative w-full border border-base-400 bg-white p-8 md:p-12"
          >
            <CornerDot className="-top-1 -left-1" />
            <CornerDot className="-top-1 -right-1" />
            <CornerDot className="-bottom-1 -left-1" />
            <CornerDot className="-bottom-1 -right-1" />

            <div className="flex flex-col gap-8 text-base text-base-900 leading-relaxed">
              <div className="flex flex-col gap-3">
                <h2 className="text-xl font-semibold text-dark-200">1. Services</h2>
                <p>
                  ElixoLabs provides AI-native product engineering services including AI agent development, operational platform builds, intelligent automation, product engineering, and technical strategy. All project scopes, timelines, and investments are agreed upon before work begins.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h2 className="text-xl font-semibold text-dark-200">2. Engagement & Payment</h2>
                <p>
                  Projects are scoped and priced based on the work involved. Payment terms are outlined in each project proposal. The discovery conversation and initial architecture review are provided at no cost.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h2 className="text-xl font-semibold text-dark-200">3. Intellectual Property</h2>
                <p>
                  Upon full payment, all custom code and systems built for your project are transferred to you. ElixoLabs retains no ownership of client-specific deliverables. We may retain rights to general-purpose tools and frameworks developed independently.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h2 className="text-xl font-semibold text-dark-200">4. Confidentiality</h2>
                <p>
                  We treat all client information, business logic, and project details as confidential. We will not disclose your project information to any third party without your written consent.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h2 className="text-xl font-semibold text-dark-200">5. Limitation of Liability</h2>
                <p>
                  ElixoLabs delivers tested, documented, production-grade systems. However, our total liability for any claim arising from our services shall not exceed the total fees paid for the specific project in question.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h2 className="text-xl font-semibold text-dark-200">6. Communication</h2>
                <p>
                  We provide weekly updates on active projects. Response time for inquiries is within 24 hours. For questions about these terms, contact us at{' '}
                  <a href="mailto:hello@elixolabs.com" className="text-primary hover:underline">
                    hello@elixolabs.com
                  </a>.
                </p>
              </div>

              <p className="text-sm text-base-600 mt-4">Last updated: February 2026</p>
            </div>
          </motion.div>
        </motion.div>
      </section>
      <Footer />
    </>
  );
};

export default TermsPage;
