'use client';
import React from 'react';
import { motion, Variants } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionBadge from '@/components/ui/SectionBadge';
import { BsShieldCheck } from 'react-icons/bs';

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

const PrivacyPage: React.FC = () => {
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
              <SectionBadge icon={BsShieldCheck} label="Privacy" />
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl font-semibold tracking-tight text-dark-200"
            >
              Privacy Policy
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
                <h2 className="text-xl font-semibold text-dark-200">1. Information We Collect</h2>
                <p>
                  When you contact us through our website or engage our services, we may collect personal information including your name, email address, company name, and project details you share with us.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h2 className="text-xl font-semibold text-dark-200">2. How We Use Your Information</h2>
                <p>
                  We use the information you provide to respond to your inquiries, scope and deliver projects, communicate about ongoing work, and improve our services. We do not sell or share your personal data with third parties for marketing purposes.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h2 className="text-xl font-semibold text-dark-200">3. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information. All client communications and project data are handled with strict confidentiality.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h2 className="text-xl font-semibold text-dark-200">4. Cookies</h2>
                <p>
                  Our website may use essential cookies to ensure proper functionality. We do not use tracking cookies or third-party analytics that collect personal data without your consent.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h2 className="text-xl font-semibold text-dark-200">5. Your Rights</h2>
                <p>
                  You have the right to access, correct, or delete your personal information at any time. To exercise these rights, contact us at hello@elixolabs.com.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h2 className="text-xl font-semibold text-dark-200">6. Contact</h2>
                <p>
                  For questions about this privacy policy, contact us at{' '}
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

export default PrivacyPage;
